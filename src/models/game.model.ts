export interface Game {
	id: number;
	publisher?: string;
	description?: string;
	title: string;
	imgUrl: string;
	gameUrl?: string;
	genre: string;
	releaseDate: string | number | Date;
	screenshots?: string[];
}
