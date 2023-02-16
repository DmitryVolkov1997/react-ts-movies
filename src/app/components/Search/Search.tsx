import styles from './Search.module.scss'
import {Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState} from 'react'

interface SearchProps {
	setSearch:Dispatch<SetStateAction<string>>
}

export const Search = ({setSearch}: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const inputValue = inputRef.current?.value.trim().length ? inputRef.current?.value : ''

		setSearch(inputValue)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label htmlFor="default-search"
				   className={styles.formLabel}>Search</label>
			<div className={styles.formRow}>
				<div className={styles.formIcon}>
					<svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none"
						 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</div>
				<input ref={inputRef} type="search" id="default-search"
					   className={styles.formInput}
					   placeholder="Search movie, series, game..."/>
				<button
					className={styles.formButton}>Search
				</button>
			</div>
		</form>
	)
}


