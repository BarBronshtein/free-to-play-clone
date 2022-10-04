import { GameService } from '@/services/game.service';
export default {
	state: () => ({
		games: null,
		filterBy: null,
	}),
	getters: {
		games({ games }) {
			return JSON.parse(games);
		},
		filterBy({ filterBy }) {
			return JSON.parse(filterBy);
		},
	},
	mutations: {
		setGames(state, { games }) {
			state.games = games;
		},
		removeGame(state, { gameId }) {
			const idx = state.games.findIndex(game => game.id === gameId);
			if (idx !== -1) {
				state.toys.splice(idx, 1);
			}
		},
		setFilterBy(state, { filterBy }) {
			state.filterBy = filterBy;
		},
	},
	actions: {
		async loadGames({ commit, state: { filterBy } }) {
			commit({ type: 'setFilterBy', filterBy });
			try {
				const games = await GameService.query(filterBy);
				commit({ type: 'setGames', games });
			} catch (err) {
				console.log(err);
			}
		},
	},
};
