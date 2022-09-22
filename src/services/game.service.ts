import { storageService } from './async-storage.service';
import axios from 'axios';
import type { Game } from '@/models/game.model';
const ENTITY = 'game';

const options = (id: string) => ({
	method: 'GET',
	url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
	params: id,
	headers: {
		'X-RapidAPI-Key': 'eb5bde3d1fmsh6e9d5cbc281da34p11d2dfjsnee13b087aa8f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
	},
});

export const GameService = {
	query,
	getById,
	remove,
};
async function query(filterBy = {}) {
	if (!localStorage.getItem(ENTITY)?.length)
		return await axios.get(`https://www.freetogame.com/api/games`);

	const games = (await storageService.query(ENTITY)) as unknown as Game[];
	return _filterGames(filterBy as { category: string; name: string }, games);
}

async function getById(gameId: string) {
	return await storageService.get(ENTITY, gameId);
}

async function remove(gameId: string) {
	return await storageService.remove(ENTITY, gameId);
}

function _filterGames(
	filterBy: { category: string | undefined; name: string | undefined },
	games: Game[]
) {
	return games;
}
