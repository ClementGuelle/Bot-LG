const ownerId = require('../../../config.json').ownerId;
const prefix = process.env.PREFIX;

module.exports = {
	name: 'messageCreate',
	once: false,
	execute(client, message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const cmdName = args.shift().toLowerCase();
		if (cmdName.length == 0) return;

		let cmd = client.commands.get(cmdName);
		if (!cmd) return;

		if (cmd.ownerOnly && !ownerId.includes(message.author.id)) {
			return message.reply("La seule personne pouvant taper cette commande est l'owner du bot !");
		}

		// Vérifiez si le message provient d'un serveur avant de vérifier les permissions
		if (message.channel.type === 'GUILD_TEXT' && !message.member.permissions.has([cmd.permission])) {
			return message.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permission.join(', ')}\`) pour taper cette commande:`);
		}

		cmd.run(client, message, args);
	},
};