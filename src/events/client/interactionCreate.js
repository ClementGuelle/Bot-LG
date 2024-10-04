const ownerId = require('../../../config.json').ownerId;

module.exports = {
	name: "interactionCreate",
	once: false,
	async execute(client, interaction) {
		// let guildSettings = await client.getGuild(interaction.guild);

		/*if (!guildSettings) {
		  await client.createGuild(interaction.guild);
		  guildSettings = await client.getGuild(interaction.guild);
		  return interaction.reply(
			"Le bot a mis à jour la base de données pour votre serveur, retapez la commande!"
		  );
		}*/

		if (interaction.isCommand()) {
			const cmd = client.commands.get(interaction.commandName);
			if (!cmd) return interaction.reply("Cette commande n'existe pas!");
			if (cmd.ownerOnly) {
				if (!ownerId.includes(interaction.user.id))
					return interaction.reply({
						content:
							"La seule personne pouvant taper cette commande est l'owner du bot!",
						ephemeral: true,
					});
			}

			if (!interaction.member.permissions.has([cmd.permissions]))
				return interaction.reply({
					content: `Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(
						", "
					)}\`) pour taper cette commande!`,
					ephemeral: true,
				});

			cmd.runInteraction(client, interaction);
		} else if (interaction.isAutocomplete()) {
			const cmd = client.commands.get(interaction.commandName);
			if (!cmd) return;
			cmd.runAutocomplete(client, interaction);
		}
		else if (interaction.isButton()) {
			switch (interaction.customId) {
				case 'relaunch':
					const edtCmd = client.commands.get('edt');
					if (!edtCmd) return interaction.reply("Cette commande n'existe pas!");
					await interaction.deferUpdate();
					await edtCmd.run(client, interaction);
					await interaction.reply({ content: 'Emploi du temps rafraîchi!', ephemeral: true });
					break;
				default:
					const btn = client.buttons.get(interaction.customId);
					if (!btn) return interaction.reply({ content: 'Ce bouton n\'existe pas!', ephemeral: true });
					btn.runInteraction(client, interaction);
					break;
			}
		} 
	},
};
