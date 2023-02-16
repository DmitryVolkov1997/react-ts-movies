import styles from './HomePage.module.scss'
import {Layout} from '../../Layout'
import {MovieList} from '../../MovieList'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {API_BASE_URL} from '../../../configs/constant'
import {LocalMovie, Movie, MovieError, MovieResponse} from '../../../types/movies'
import {isMovies} from '../../../utils/typeguards'
import {extractLocalMovies} from '../../../utils/extract-local-movies'
import {Spinner} from '../../Spinner'
import {Search} from '../../Search'
import {RadioButton} from '../../RadioButton'

interface HomePageProps {
}

const labels = [
	{
		htmlFor: 'all',
		label: 'All',
		value: 'all',
	},
	{
		htmlFor: 'movies',
		label: 'Movies only',
		value: 'movie',
	},
	{
		htmlFor: 'series',
		label: 'Series only',
		value: 'series',
	}
]

export const HomePage = ({}: HomePageProps) => {
	const [movies, setMovies] = useState<LocalMovie[] | null>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [radioValue, setRadioValue] = useState<string>('all')
	const [search, setSearch] = useState('matrix')

	const getMovies = async (movieName: string = 'matrix', type: string = 'all'): Promise<void> => {
		setLoading(true)

		const {data} = await axios.get(`${API_BASE_URL}=${movieName ? movieName : 'matrix'}&type=${type !== 'all' ? type : ''}`)
		const response = data.Search as MovieResponse | MovieError

		if (isMovies(response)) {
			setMovies(extractLocalMovies(response))
			setLoading(false)
		} else {
			setMovies(null)
		}
	}

	useEffect(() => {
		getMovies(search, radioValue).catch(e => e.message && console.log(e.message))
	}, [search, radioValue])

	return (
		<Layout>
			<div className={styles.homePage}>
				<div className="container">
					<div className={styles.row}>
						<Search setSearch={setSearch}/>

						<div className={styles.box}>
							{
								labels.map((radio, idx) => (
									<RadioButton key={idx} setRadio={setRadioValue}
												 radioValue={radioValue} {...radio} />
								))
							}
						</div>

						{loading ? <Spinner className={styles.spinner}/> : <MovieList movies={movies}/>}
					</div>
				</div>
			</div>
		</Layout>
	)
}


