import styles from './RadioButton.module.scss'
import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'

interface RadioButtonProps {
	htmlFor: string,
	label: string,
	value: string,
	setRadio: Dispatch<SetStateAction<string>>,
	radioValue: string

}

export const RadioButton = ({htmlFor, label, value, setRadio, radioValue}: RadioButtonProps) => {

	return (
		<div className={styles.radioButton}>
			<input id={htmlFor} checked={radioValue === value} type="radio" value={value}
				   name="radio-button"
				   className={styles.radioButtonInput} onChange={(e) => setRadio(e.target.value)}/>
			<label htmlFor={htmlFor}
				   className={styles.radioButtonLabel}>{label}</label>
		</div>
	)
}


