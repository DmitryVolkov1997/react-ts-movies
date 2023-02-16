import styles from './Layout.module.scss'
import {Header} from './Header'
import {Footer} from './Footer'
import {ReactNode} from 'react'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header/>
			<main className={styles.main}>
				{children}
			</main>
			<Footer/>
		</div>
	)
}


