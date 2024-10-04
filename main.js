const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');

const dotenv = require('dotenv'); dotenv.config();
const Logger = require("./src/utils/Logger");

const client = new Client({
	intents: [
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildPresences,
	],
	partials: [Partials.MESSAGE, Partials.Channel, Partials.REACTION, Partials.USER, Partials.GUILD],
});

// Configuration des handlers
["CommandUtil", "EventUtil"].forEach(handler => {
	require(`./src/utils/handlers/${handler}`)(client)
});

// Gestion des collections
["commands", "buttons", "selects"].forEach(
	(x) => (client[x] = new Collection())
);

// Gestion des événements système
process.on("exit", (code) => {
	Logger.client(`Le processus s'est arrêté avec le code: ${code}!`);
});

process.on("uncaughtException", (err, origin) => {
	Logger.error(`UNCAUGHT_EXCEPTION: ${err}`);
	console.error(`Origine: ${origin}`);
});

process.on("unhandledRejection", (reason, promise) => {
	Logger.warn(`UNHANDLED_REJECTION: ${reason}`);
	console.log(promise);
});

process.on("warning", (...args) => Logger.warn(...args));

client.login(process.env.DISCORD_TOKEN);