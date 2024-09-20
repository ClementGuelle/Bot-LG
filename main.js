const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const Logger = require("./src/utils/Logger");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_PRESENCES 
	],
	partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "GUILD"],
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