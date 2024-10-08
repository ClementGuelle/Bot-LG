const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "voiceStateUpdate",
	once: false,
	async execute(client, oldState, newState) {

		const embed       = new EmbedBuilder()
		const userChannel = await client.users.fetch(newState.id)


		if (newState.channelId === process.env.VOCAL_CHANNEL)
		{
			
			embed.setAuthor({
					name: client.user.username,
					iconURL: client.user.displayAvatarURL(),
				})
				.setColor("#21ff81")
				.setDescription(` ${userChannel}, 
				Tu as rejoint une partie de Loup-Garou UHC. Je t'invite à respecter scrupuleusement toutes les règles écrites dans le salon dédié à cet effet, sans quoi je crains que tu ne puisses pas participer aux prochaines parties.
			
				Durant toute la partie, tu devras rester dans le salon "Village" en mode muet avec ton casque. Un maître du village sera présent pour répondre à tes questions.
			
				Tu pourras quitter le vocal à la fin de la partie.`)
				.setFooter({ text: "Bonne partie ! Amuse-toi bien." });


			// Envoie un message en MP à l'utilisateur quand il rejoint
			userChannel.send({ embeds: [embed] });
		}
		else if (oldState.channelId === process.env.VOCAL_CHANNEL && newState.channelId === null)
		{
			embed.setAuthor({
					name: client.user.username,
					iconURL: client.user.displayAvatarURL(),
				})
				.setColor("#ff2142")
				.setDescription(` ${userChannel}, 
				Merci d'avoir participé à cette partie ! J'espère que tu t'es bien amusé.

				Si tu as envie de nous donner ton avis sur cette partie pour nous aider à nous améliorer, n'hésite pas à taper la commande "/avis".

				Si tu as des questions ou si tu veux signaler quelque chose (à propos du jeu, d'un joueur ou d'un rôle), contacte les maires de la ville dans le salon FAQ.`)
				.setFooter({ text: "Merci d'avoir participé !" });


			// Envoie un message en MP à l'utilisateur quand il quitte
			userChannel.send({ embeds: [embed] });
		}
	},
};
