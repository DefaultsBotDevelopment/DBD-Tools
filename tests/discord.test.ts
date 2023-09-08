import { DiscordUtils } from '../src/discord';
import type { APIButtonComponent } from 'discord.js';
import { ComponentType, ButtonStyle } from 'discord.js';

describe('DiscordUtils formatButtons function', () => {
	it('should format buttons', () => {
		const buttons: APIButtonComponent[] = [
			{
				custom_id: '1',
				label: '1',
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			},
			{
				custom_id: '2',
				label: '2',
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			},
			{
				custom_id: '3',
				label: '3',
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			},
			{
				custom_id: '4',
				label: '4',
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			},
			{
				custom_id: '5',
				label: '5',
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			},
			{
				custom_id: '6',
				label: '6',
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			},
		];

		const result = DiscordUtils.formatButtons(buttons);

		expect(result).toEqual([
			{
				type: ComponentType.ActionRow,
				components: [
					{
						custom_id: '1',
						label: '1',
						style: ButtonStyle.Primary,
						type: ComponentType.Button,
					},
					{
						custom_id: '2',
						label: '2',
						style: ButtonStyle.Primary,
						type: ComponentType.Button,
					},
					{
						custom_id: '3',
						label: '3',
						style: ButtonStyle.Primary,
						type: ComponentType.Button,
					},
					{
						custom_id: '4',
						label: '4',
						style: ButtonStyle.Primary,
						type: ComponentType.Button,
					},
					{
						custom_id: '5',
						label: '5',
						style: ButtonStyle.Primary,
						type: ComponentType.Button,
					},
				],
			},
			{
				type: ComponentType.ActionRow,
				components: [
					{
						custom_id: '6',
						label: '6',
						style: ButtonStyle.Primary,
						type: ComponentType.Button,
					},
				],
			},
		]);
	});

	it('should throw an error if there are more than 25 buttons', () => {
		const buttons: APIButtonComponent[] = [];

		for (let i = 0; i < 26; i++) {
			buttons.push({
				custom_id: i.toString(),
				label: i.toString(),
				style: ButtonStyle.Primary,
				type: ComponentType.Button,
			});
		}

		expect(() => DiscordUtils.formatButtons(buttons)).toThrow('You can only have 25 buttons and 5 action rows per message.');
	});

	it('should throw an error if there are no buttons', () => {
		const buttons: APIButtonComponent[] = [];

		expect(() => DiscordUtils.formatButtons(buttons)).toThrow('You need at least 1 button to create a message.');
	});
});

describe('DiscordUtils formatSelects function', () => {
	it('should format the string options into string select menus', () => {
		const options: { label: string; value: string }[] = [];

		for (let i = 0; i < 76; i++) {
			options.push({ label: `option ${i}`, value: `option_${i}` });
		}

		const result = DiscordUtils.formatSelects('custom_id', 'placeholder', 1, 1, options);

		expect(result).toHaveLength(4);
	});

	it('should throw an error if there are more than 100 options', () => {
		const options: { label: string; value: string }[] = [];

		for (let i = 0; i < 101; i++) {
			options.push({ label: `option ${i}`, value: `option_${i}` });
		}

		expect(() => DiscordUtils.formatSelects('custom_id', 'placeholder', 1, 1, options)).toThrow('You can only have 100 options and 5 action rows per message.');
	});

	it('should throw an error if there are no options', () => {
		const options: { label: string; value: string }[] = [];

		expect(() => DiscordUtils.formatSelects('custom_id', 'placeholder', 1, 1, options)).toThrow('You need at least 1 option to create a message.');
	});
});

describe('DiscordUtils getMentions function', () => {
	it('should return an array of user mentions', () => {
		const message = 'Hello <@000000000000000000>!';

		const result = DiscordUtils.getMentions(message, { users: true });

		expect(result.users).toBeDefined();
		expect(result.users).toHaveLength(1);
		if (result.users) expect(result.users[0]).toEqual('000000000000000000');
	});

	it('should return an array of role mentions', () => {
		const message = 'Hello <@&000000000000000000>!';

		const result = DiscordUtils.getMentions(message, { roles: true });

		expect(result.roles).toBeDefined();
		expect(result.roles).toHaveLength(1);
		if (result.roles) expect(result.roles[0]).toEqual('000000000000000000');
	});

	it('should return an array of channel mentions', () => {
		const message = 'Hello <#000000000000000000>!';

		const result = DiscordUtils.getMentions(message, { channels: true });

		expect(result.channels).toBeDefined();
		expect(result.channels).toHaveLength(1);
		if (result.channels) expect(result.channels[0]).toEqual('000000000000000000');
	});

	it('should return an array of user, role and channel mentions', () => {
		const message = 'Hello <@000000000000000000> <@&000000000000000000> <#000000000000000000>!';

		const result = DiscordUtils.getMentions(message, { users: true, roles: true, channels: true });

		expect(result.users).toBeDefined();
		expect(result.users).toHaveLength(1);
		if (result.users) expect(result.users[0]).toEqual('000000000000000000');

		expect(result.roles).toBeDefined();
		expect(result.roles).toHaveLength(1);
		if (result.roles) expect(result.roles[0]).toEqual('000000000000000000');

		expect(result.channels).toBeDefined();
		expect(result.channels).toHaveLength(1);
		if (result.channels) expect(result.channels[0]).toEqual('000000000000000000');
	});

	it('should return an empty array if there are no mentions', () => {
		const message = 'Hello!';

		const result = DiscordUtils.getMentions(message, { users: true, roles: true, channels: true });

		expect(result.users).toBeDefined();
		expect(result.users).toHaveLength(0);

		expect(result.roles).toBeDefined();
		expect(result.roles).toHaveLength(0);

		expect(result.channels).toBeDefined();
		expect(result.channels).toHaveLength(0);
	});
});
