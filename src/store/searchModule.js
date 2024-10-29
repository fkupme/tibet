const searchModule = {
	state: () => ({
		locationID: 'Локация',
		locationOptions: {
			'': 'Локация',
			tibet: 'Тибет',
			lake: 'Озеро',
			yoga: 'Йога',
			PotalaPalace: "Дворец Потала",
			Gyantse: "Гьянгдзе",
			Norbulingka: "Норбулинка",
			JokhangTemple: "Храм Джоканг",
			SeraMonastery: "Монастырь Сэра",
			DrepungMonastery: "Монастырь Дрепунг",
			YamdrokLake: "Озеро Ямдрок",
			MountKailash: "Гора Кайлас",
			LakeManasarovar: "Озеро Манасаровар",
			Himalayas: "Гималаи",
			BeijingTemples: "Пекинские храмы",
		},
		teamID: 'Участники',
		teamOptions: [4, 5, 6, 7, 8, 9, 10],
	}),
	getters: {},
	mutations: {},
	actions: {},
	namespaced: true,
};
export default searchModule;
