import styles from './MovieList.module.scss'
import {LocalMovie} from '../../types/movies'
import {MovieItem} from './MovieItem'

interface MovieListProps {
	movies: LocalMovie[] | null
}

export const MovieList = ({movies = []}: MovieListProps) => {
	return (
		<div className={styles.movieList}>
			{
				movies?.length ? movies.map((movie, idx) => {
					return <MovieItem key={movie.imdbID} {...movie}/>
				}) : <h1>Ничего не найдено</h1>
			}
		</div>
	)
}


