import type { Game } from '@/models/game.model';
import { createStore, Store } from 'vuex';
import { gameService } from '@/services/game.service';
import type { InjectionKey } from 'vue';
interface State {
	games: null | Game[];
	curGame: null | Game;
	filterBy: null | Object;
}
export const key: InjectionKey<Store<State>> = Symbol();
const store = createStore<State>({
	state: () => ({
		games: null,
		filterBy: null,
		curGame: null,
	}),
	getters: {
		games({ games }) {
			return JSON.parse(JSON.stringify(games));
		},
		game({ curGame }) {
			return JSON.parse(JSON.stringify(curGame));
		},
		filterBy({ filterBy }) {
			return JSON.parse(JSON.stringify(filterBy));
		},
	},
	mutations: {
		setGames(state, { games }) {
			state.games = games;
		},
		setGame(state, { game }) {
			state.curGame = game;
		},
		setFilterBy(state, { filterBy }) {
			state.filterBy = filterBy;
		},
	},
	actions: {
		async loadGames({ commit }, { filterBy }) {
			console.log(filterBy);
			commit({ type: 'setFilterBy', filterBy });
			try {
				const games = await gameService.query(filterBy);
				commit({ type: 'setGames', games });
			} catch (err) {
				console.log(err);
			}
		},
		async loadGame({ commit }, { id }) {
			try {
				const game = await gameService.getById(id);
				commit({ type: 'setGame', game });
			} catch (err) {
				console.log('cannot load game: ', err);
			}
		},
	},
});
export default store;
