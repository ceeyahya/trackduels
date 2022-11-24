export type Track = {
	id: number;
	name: string;
	cover: string;
	preview: string;
	artists: string;
	likes: number;
};

export type Tracks = Array<Track>;
