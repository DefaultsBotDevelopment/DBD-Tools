"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordUtils = exports.getMentions = exports.formatSelects = exports.formatButtons = void 0;
const discord_js_1 = require("discord.js");
/**
 * @description Format buttons into action rows
 * @example const actionRows = formatButtons([button1, button2, button3]);
 */
function formatButtons(buttons) {
    // check if the amount of buttons is more than 25.
    if (buttons.length > 25)
        throw new Error('You can only have 25 buttons and 5 action rows per message.');
    // chunk the buttons into 5 buttons per row.
    let chunks = [];
    while (buttons.length) {
        chunks.push(buttons.splice(0, 5));
    }
    if (chunks.length <= 0)
        throw new Error('You need at least 1 button to create a message.');
    // create action rows with the buttons.
    const actionRows = chunks.map((chunk) => {
        return {
            type: discord_js_1.ComponentType.ActionRow,
            components: chunk,
        };
    });
    return actionRows;
}
exports.formatButtons = formatButtons;
/**
 * @description Formats an array of strings in string select message components with a max of 25 options per row.
 * @example const actionRows = formatSelects('custom_id', 'Select an option', 1, 1, [{ label: 'option 1', value: 'option_1' }, { label: 'option 2', value: 'option_2' }]);
 */
function formatSelects(custom_id, placeholder, min_values, max_values, options) {
    // check if the amount of options is more than 100.
    if (options.length > 100)
        throw new Error('You can only have 100 options and 5 action rows per message.');
    if (options.length <= 0)
        throw new Error('You need at least 1 option to create a message.');
    // chunk the options into 25 options per row.
    let chunks = options.map((option, index) => {
        if (index % 25 === 0)
            return options.slice(index, index + 25);
    });
    // remove empty values from the array.
    chunks = chunks.filter((chunk) => chunk);
    // create action rows with the chunks.
    let rows = chunks.map((chunk, index) => {
        return {
            type: discord_js_1.ComponentType.ActionRow,
            components: [
                {
                    type: discord_js_1.ComponentType.StringSelect,
                    customId: index > 0 ? `${custom_id + index}` : custom_id,
                    placeholder: placeholder || 'Select an option',
                    minValues: min_values || 1,
                    maxValues: max_values || 1,
                    options: chunk,
                },
            ],
        };
    });
    return rows;
}
exports.formatSelects = formatSelects;
/**
 * @description get mentions from string.
 * @example const mentions = getMentions('Hello <@123456789>!', { users: true });
 */
function getMentions(text, options) {
    const { users, roles, channels } = options;
    const mentions = {};
    if (users) {
        mentions.users = [];
        let userMentions = text.match(/<@!?(\d{17,19})>/g);
        userMentions?.forEach((mention) => {
            mentions.users?.push(mention.replace(/<@!?/, '').replace(/>/, ''));
        });
    }
    if (roles) {
        mentions.roles = [];
        let roleMentions = text.match(/<@&(\d{17,19})>/g);
        roleMentions?.forEach((mention) => {
            mentions.roles?.push(mention.replace(/<@&/, '').replace(/>/, ''));
        });
    }
    if (channels) {
        mentions.channels = [];
        let channelMentions = text.match(/<#(\d{17,19})>/g);
        channelMentions?.forEach((mention) => {
            mentions.channels?.push(mention.replace(/<#/, '').replace(/>/, ''));
        });
    }
    return mentions;
}
exports.getMentions = getMentions;
exports.DiscordUtils = {
    formatButtons,
    formatSelects,
    getMentions,
};
exports.default = {
    formatButtons,
    formatSelects,
    getMentions,
};
