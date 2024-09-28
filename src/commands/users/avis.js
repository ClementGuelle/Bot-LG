const { MessageEmbed, MessageActionRow, MessageSelectMenu, CommandInteraction } = require("discord.js");

const menus = [
	{
		type: 'SELECT_MENU',
		customId: 'role-loup-garou',
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
			{ label: 'Loup-Garou Amnésique', value: 'Loup-Garou Amnésique' },
			{ label: 'Loup-Garou Blanc', value: 'Loup-Garou Blanc' },
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-villageois-1',
		options: [
			{ label: 'Voyante', value: 'Voyante' },
			{ label: 'Montreur d\'Ours', value: 'Montreur d\'Ours' },
			{ label: 'Renard', value: 'Renard' },
			{ label: 'Détective', value: 'Détective' },
			{ label: 'Citoyen', value: 'Citoyen' },
			{ label: 'Prêtresse', value: 'Prêtresse' },
			{ label: 'Chaman', value: 'Chaman' },
			{ label: 'Oracle', value: 'Oracle' },
			{ label: 'Jumeaux', value: 'Jumeaux' },
			{ label: 'Analyste', value: 'Analyste' },
			{ label: 'Druide', value: 'Druide' },
			{ label: 'Marchande de Fruits', value: 'Marchande de Fruits' },
			{ label: 'Vieux Sage', value: 'Vieux Sage' },
			{ label: 'Occultiste', value: 'Occultiste' },
			{ label: 'Fossoyeur', value: 'Fossoyeur' },
			{ label: 'Conteuse', value: 'Conteuse' },
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-villageois-2',
		options: [
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
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-villageois-3',
		options: [
			{ label: 'Ermite', value: 'Ermite' },
			{ label: 'Serviteur', value: 'Serviteur' },
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
		]
	},
	{
		type: 'SELECT_MENU',
		customId: 'role-neutre',
		options: [
			{ label: 'Joueur de flûte', value: 'Joueur de flûte' },
			{ label: 'Feu follet', value: 'Feu follet' },
			{ label: 'Charmeuse', value: 'Charmeuse' },
			{ label: 'Voyou', value: 'Voyou' },
			{ label: 'Barbare', value: 'Barbare' },
			{ label: 'Nécromancien', value: 'Nécromancien' },
			{ label: 'Succube', value: 'Succube' },
			{ label: 'Tueur en Série', value: 'Tueur en Série' },
		]
	}
]; 


const proposition = [
	{ label: '1', value: '1', }, 
	{ label: '2', value: '2', },
	{ label: '3', value: '3', }, 
	{ label: '4', value: '4', }, 
	{ label: '5', value: '5', }, 
	{ label: '6', value: '6', }, 
	{ label: '7', value: '7', }, 
	{ label: '8', value: '8', }, 
	{ label: '9', value: '9', },
	{ label: '10', value: '10', }
];



async function creationMenu(customId, liste)
{
	return new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId(customId)
					.setPlaceholder(customId)
					.setDisabled(false)
					.addOptions(liste)
			);
}


async function listeDeroulante(customId, qst, descriptionQst) {

	let components = [];

	if (customId === "role_menu")
	{
		for ( let i = 0; i <= menus.length-1; i++)
			components.push(await creationMenu(menus[i].customId, menus[i].options))
	}
	else
	{
		components.push(await creationMenu(customId, proposition))
	}

	const embed = new MessageEmbed()
		.setTitle(qst)
		.setDescription(descriptionQst);



	return { embeds: [embed], components: components };

}

async function lectureReponse(interaction, donneeRecolte, customId)
{
	return new Promise((resolve) => {

		const filter = i => i.user.id === interaction.user.id;
		const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

		collector.on('collect', async (i) => {
			if (i.isSelectMenu()) {
				donneeRecolte.push(i.values[0]);
				i.deferReply()
				collector.stop();
				resolve();
			}
		});

		collector.on('end', () => {
			resolve();
		});

	});
}

function desactiveReponse(liste)
{
	liste.components.forEach(component => {
		if (component.type === 'SELECT_MENU') {
			component.setDisabled(true);
		}
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
		const roleMenu = await listeDeroulante("role_menu", 'Quel était ton rôle ?', 'Choisis le rôle que tu as été.');
		await interaction.reply(roleMenu);
		await lectureReponse(interaction, donneeRecolte, "role_menu");
		desactiveReponse(roleMenu);


		// note sur le role
		const noteRole = await listeDeroulante("note_role", 'Comment as-tu trouvé ton rôle ? ', 'Note sur 10');
		await interaction.followUp(noteRole)
		await lectureReponse(interaction, donneeRecolte, "note_role");
		desactiveReponse(roleMenu);


		// note sur l'ambiance
		const ambiance = await listeDeroulante("ambiance", 'Comment as-tu trouvé l\'ambiance de la partie ? ', 'Note sur 10');
		await interaction.followUp(ambiance)
		await lectureReponse(interaction, donneeRecolte, "ambiance");
		desactiveReponse(roleMenu);


		console.log(donneeRecolte);
	}

}