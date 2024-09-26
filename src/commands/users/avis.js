const { MessageEmbed, MessageActionRow, MessageSelectMenu, CommandInteraction } = require("discord.js");

const menus = [
	{
		type: 'SELECT_MENU',
		customId: 'role-menu-1',
		options: [
			{ label: 'Loup-Garou', value: 'Loup-Garou' },
			{ label: 'Vilain Petit Loup', value: 'Vilain Petit Loup' },
			{ label: 'Infect Père des Loups', value: 'Infect Père des Loups' },
			{ label: 'Loup-Garou Feutré', value: 'Loup-Garou Feutré' },
			{ label: 'Loup-Garou Perfide', value: 'Loup-Garou Perfide' },
			{ label: 'Loup-Garou Mystique', value: 'Loup-Garou Mystique' },
			{ label: 'Loup-Garou Grimeur', value: 'Loup-Garou Grimeur' },
			{ label: 'Loup-Garou Vengeur', value: 'Loup-Garou Vengeur' },
			{ label: 'Loup-Garou Alpha', value: 'Loup-Garou Alpha' },
			{ label: 'Grand méchant loup', value: 'Grand méchant loup' },
			{ label: 'Loup-Garou Craintif', value: 'Loup-Garou Craintif' },
			{ label: 'Loup-Garou Hurleur', value: 'Loup-Garou Hurleur' },
			{ label: 'Loup-Garou Ténébreux', value: 'Loup-Garou Ténébreux' },
			{ label: 'Loup-garou sanguinaire', value: 'Loup-garou sanguinaire' },
			{ label: 'Loup-garou Muselant', value: 'Loup-garou Muselant' },
			{ label: 'Voyante', value: 'Voyante' },
			{ label: 'Montreur d\'Ours', value: 'Montreur d\'Ours' },
			{ label: 'Renard', value: 'Renard' },
			{ label: 'Détective', value: 'Détective' },
			{ label: 'Citoyen', value: 'Citoyen' },
			{ label: 'Prêtresse', value: 'Prêtresse' },
			{ label: 'Chaman', value: 'Chaman' },
			{ label: 'Oracle', value: 'Oracle' },
			{ label: 'Jumeaux', value: 'Jumeaux' },
			{ label: 'Analyste', value: 'Analyste' }
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-menu-2',
		options: [
			{ label: 'Druide', value: 'Druide' },
			{ label: 'Marchande de Fruits', value: 'Marchande de Fruits' },
			{ label: 'Vieux Sage', value: 'Vieux Sage' },
			{ label: 'Occultiste', value: 'Occultiste' },
			{ label: 'Fossoyeur', value: 'Fossoyeur' },
			{ label: 'Conteuse', value: 'Conteuse' },
			{ label: 'Espion', value: 'Espion' },
			{ label: 'Interprète', value: 'Interprète' },
			{ label: 'Aubergiste', value: 'Aubergiste' },
			{ label: 'Croupier', value: 'Croupier' },
			{ label: 'Bibliothécaire', value: 'Bibliothécaire' },
			{ label: 'Villageois', value: 'Villageois' },
			{ label: 'Petite Fille', value: 'Petite Fille' },
			{ label: 'Sorcière', value: 'Sorcière' },
			{ label: 'Salvateur', value: 'Salvateur' },
			{ label: 'Trublion', value: 'Trublion' },
			{ label: 'Sœurs', value: 'Sœurs' },
			{ label: 'Ancien', value: 'Ancien' },
			{ label: 'Corbeau', value: 'Corbeau' },
			{ label: 'Idiot du village', value: 'Idiot du village' },
			{ label: 'Garde', value: 'Garde' },
			{ label: 'Chasseur', value: 'Chasseur' },
			{ label: 'Ermite', value: 'Ermite' },
			{ label: 'Serviteur', value: 'Serviteur' }
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-menu-3',
		options: [
			{ label: 'Servante dévouée', value: 'Servante dévouée' },
			{ label: 'Lapin', value: 'Lapin' },
			{ label: 'Bienfaiteur', value: 'Bienfaiteur' },
			{ label: 'Illusionniste', value: 'Illusionniste' },
			{ label: 'Mire', value: 'Mire' },
			{ label: 'Braconnier', value: 'Braconnier' },
			{ label: 'Rebouteux', value: 'Rebouteux' },
			{ label: 'Inquisiteur', value: 'Inquisiteur' },
			{ label: 'Témoin', value: 'Témoin' },
			{ label: 'Comédien', value: 'Comédien' },
			{ label: 'Frère Siamois', value: 'Frère Siamois' },
			{ label: 'Trappeur', value: 'Trappeur' },
			{ label: 'Cupidon', value: 'Cupidon' },
			{ label: 'Voleur', value: 'Voleur' },
			{ label: 'Loup-Garou Amnésique', value: 'Loup-Garou Amnésique' },
			{ label: 'Chien-Loup', value: 'Chien-Loup' },
			{ label: 'Escroc', value: 'Escroc' },
			{ label: 'Romulus ou Remus', value: 'Romulus ou Remus' },
			{ label: 'Auramancien', value: 'Auramancien' },
			{ label: 'Tombeur', value: 'Tombeur' },
			{ label: 'Loup-Garou Blanc', value: 'Loup-Garou Blanc' },
			{ label: 'Assassin', value: 'Assassin' },
			{ label: 'Ange', value: 'Ange' },
			{ label: 'Imitateur', value: 'Imitateur' },
			{ label: 'Rival', value: 'Rival' }
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-menu-4',
		options: [
			{ label: 'Joueur de flûte', value: 'Joueur de flûte' },
			{ label: 'Feu follet', value: 'Feu follet' },
			{ label: 'Charmeuse', value: 'Charmeuse' },
			{ label: 'Voyou', value: 'Voyou' },
			{ label: 'Barbare', value: 'Barbare' },
			{ label: 'Nécromancien', value: 'Nécromancien' },
			{ label: 'Succube', value: 'Succube' },
			{ label: 'Tueur en Série', value: 'Tueur en Série' }
		]
	}
];

const proposition = [
	{ label: '1', value: 'option1', }, 
	{ label: '2', value: 'option2', },
	{ label: '3', value: 'option3', }, 
	{ label: '4', value: 'option4', }, 
	{ label: '5', value: 'option5', }, 
	{ label: '6', value: 'option6', }, 
	{ label: '7', value: 'option8', }, 
	{ label: '9', value: 'option9', }, 
	{ label: '10', value: 'option10', },
];


async function creationMenu(customId, liste)
{
	return new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId(customId)
					.setPlaceholder('Rien n\'a été sélectionné')
					.addOptions(liste)
			);
}


async function listeDeroulante(customId, qst, descriptionQst) {

	let components = [];

	if (customId === 'role-menu')
	{
		components.push(creationMenu(menus[0].customId, menus[0].options))
		components.push(creationMenu(menus[1].customId, menus[1].options))
		components.push(creationMenu(menus[2].customId, menus[2].options))
		components.push(creationMenu(menus[3].customId, menus[3].options))
	}
	else
	{
		components.push(creationMenu(customId, proposition))
	}

	const embed = new MessageEmbed()
		.setTitle(qst)
		.setDescription(descriptionQst);


	return Promise.all(components).then(resolvedComponents => {
		if (customId === 'role-menu')
			return { embeds: [embed], components: resolvedComponents };
		else
			return { embeds: [embed], components: [resolvedComponents[0]] };
	});


}

module.exports = {
	name: "avis",
	category: "users",
	permissions: ["SEND_MESSAGES"],
	ownerOnly: false,
	usage: "avis",
	examples: ["avis"],
	description: "Donne ton avis sur la partie",


	async runInteraction(client, interaction) {
		
		let donneeRecolte = []


		// Role joueur
		const roleMenu = await listeDeroulante('role-menu', 'Quel était ton rôle ?', 'Choisis le rôle que tu as été.');
		await interaction.reply(roleMenu);



		// Ambiance
		//const ambiance = await listeDeroulante("Comment as-tu trouvé l'ambiance de la partie ?", "Note sur 10", interaction);
		//console.log(ambiance);


		await new Promise((resolve) => {
			const collector = interaction.channel.createMessageComponentCollector({ componentType: 'SELECT_MENU', time: 60000 });

			collector.on('collect', async (interaction) => {
				if (interaction.isSelectMenu()) {
					donneeRecolte.push(interaction.values[0]);
					interaction.deferUpdate();
					resolve();
				}
			});

			collector.on('end', () => {
				resolve();
			});

		});

		console.log(donneeRecolte);
	}

}

