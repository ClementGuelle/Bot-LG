const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "voiceStateUpdate",
	once: false,
	async execute(client, oldState, newState) {


		const embed = new MessageEmbed()
			.setAuthor({
				name: `${member.user.tag} (${member.id})`,
				iconURL: member.user.displayAvatarURL(),
			})
			.setColor("#21ff81")
			.setDescription(` Nom d'utilisateur: ${member}
							± Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
							± Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`)
			.setTimestamp()
			.setFooter({ text: "L'utilisateur a rejoint!" });


		


		// Envoie un message en MP à l'utilisateur quand il rejoint
		const userChannel = client.channels.cache.get(process.env.LOG_CHANNEL);
		userChannel.send({ embeds: [embed] });

		// Envoie un message en MP à l'utilisateur quand il quitte 
		userChannel.send({ embeds: [embed] });

		// Envoie un message dans les logs du serv sur ce que le bot fait 
		const logChannel = client.channels.cache.get(process.env.LOG_CHANNEL);
		logChannel.send({ embeds: [embed] });
	},
};
