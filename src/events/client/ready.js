const Logger = require("../../utils/Logger");

module.exports = {
	name: "ready",
	once: true,
	async execute(client) {
		Logger.client("- prêt à être utilisé");

		client.user.setPresence({
			activities: [{ name: " Supervise la partie en cours ... ", type: "CUSTOM" }],
			status: "online",
		});
		const devGuild = await client.guilds.cache.get(process.env.GUILD_ID);
		client.commands.set(client.commands.map((cmd) => cmd));

	},
};
