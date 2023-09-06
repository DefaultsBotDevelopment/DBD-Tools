import type { ButtonComponent, StringSelectMenuComponent } from 'discord.js';
import { ComponentType } from 'discord.js';
/**
 * @description Format buttons into action rows
 * @example const actionRows = formatButtons([button1, button2, button3]);
 */
export declare function formatButtons(buttons: ButtonComponent[]): Array<{
    type: ComponentType;
    components: ButtonComponent[];
}>;
/**
 * @description Formats an array of strings in string select message components with a max of 25 options per row.
 * @example const actionRows = formatSelects('custom_id', 'Select an option', 1, 1, [{ label: 'option 1', value: 'option_1' }, { label: 'option 2', value: 'option_2' }]);
 */
export declare function formatSelects(custom_id: string, placeholder: string, min_values: number, max_values: number, options: {
    label: string;
    value: string;
}[]): Array<{
    type: ComponentType;
    components: StringSelectMenuComponent[];
}>;
/**
 * @description get user mentions from string.
 * @example const mentions = getMentions('Hello <@123456789>!', { users: true });
 */
export declare function getMentions(text: string, options: {
    users?: boolean;
    roles?: boolean;
    channels?: boolean;
}): {
    users?: string[];
    roles?: string[];
    channels?: string[];
};
declare const _default: {
    formatButtons: typeof formatButtons;
    formatSelects: typeof formatSelects;
    getMentions: typeof getMentions;
};
export default _default;
//# sourceMappingURL=discord.d.ts.map