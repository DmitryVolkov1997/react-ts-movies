import {Movie} from '../types/movies'

export const isMovies = (movies: any): movies is Movie[] => 'imdbID' in movies[0]