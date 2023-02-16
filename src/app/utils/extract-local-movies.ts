import {LocalMovie, Movie} from '../types/movies'

export const extractLocalMovies = (movies: Movie[]): LocalMovie[] => {
	return movies.map(movie => {
		return {
			title: movie.Title,
			year: movie.Year,
			imdbID: movie.imdbID,
			type: movie.Type,
			poster: movie.Poster,
		}
	})
}