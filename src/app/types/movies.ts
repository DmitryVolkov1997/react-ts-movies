export type LocalMovie = {
	title: string
	year: string
	imdbID: string
	type: string
	poster: string
}


export type Movie = {
	Title: string
	Year: string
	imdbID: string
	Type: string
	Poster: string
}

export type MovieResponse = {
	Response: string
	Search: Movie[]
	totalResults: string
}

export type MovieError = {
	Response: string
	Error: string
}



