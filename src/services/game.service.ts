import type { Game } from '@/models/game.model';
import axios from 'axios';
const ENTITY = 'game';
interface Options {
	method: string;
	url: string;
	headers: Object;
	params?: Object | string;
}
const options = (filter: Object | string) => ({
	method: 'GET',
	url: filter
		? 'https://free-to-play-games-database.p.rapidapi.com/api/filter'
		: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
	headers: {
		'X-RapidAPI-Key': 'eb5bde3d1fmsh6e9d5cbc281da34p11d2dfjsnee13b087aa8f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
	},
	params: filter,
});

export const gameService = {
	query,
	getById,
};
async function query(filterBy = '') {
	const opt = options(filterBy) as Options;
	if (!filterBy) delete opt.params;
	const games = await axios.request(opt as any);
	return games.data.map((game: any) => ({
		id: game.id,
		title: game.title,
		genre: game.genre,
		imgUrl: game.thumnbail,
		releaseDate: game.release_date,
	}));

	// const games = (await storageService.query(ENTITY)) as unknown as Game[];
}

async function getById(gameId: string) {
	const opt = options({ id: gameId });
	opt.url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
	const { data } = await axios.request(opt);
	return {
		title: data.title,
		genre: data.genre,
		imgUrl: data.thumbnail,
		releaseDate: data.release_date,
		description: data.description,
		publisher: data.publisher,
		gameUrl: data.game_url,
		screenshots: data.screenshots?.map(({ image }: any) => image),
	};
	// return await storageService.get(ENTITY, gameId);
}
