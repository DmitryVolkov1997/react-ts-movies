import styles from './MovieItem.module.scss'
import {LocalMovie} from '../../../types/movies'

interface MovieItemProps extends LocalMovie {
}

export const MovieItem = ({imdbID, type, year, title, poster}: MovieItemProps) => {
	return (
		<div className={styles.movieItem}>
			{
				poster === 'N/A' ? <img className={styles.poster} src="https://place-hold.it/300" alt={title}/> :
					<img className={styles.poster} src={poster} alt={title}/>
			}


			<div className={styles.info}>
				<h5 className={styles.infoTitle}>{title}</h5>

				<div className={styles.infoRow}>
					<p className={styles.infoYear}>{year}</p>
					<p className={styles.infoType}>{type}</p>
				</div>
			</div>
		</div>
	)
}


