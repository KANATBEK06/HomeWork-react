import React from 'react'
import './inputForm.css'
const InputForm = (props) => {
	return (
		<div>
			<label className='label-form' htmlFor={props.id}>{props.labelName}</label>
			<br />
			<input className='input-form'
				type={props.type}
				placeholder={props.placeholder || ''}
				id={props.id}
				{...props}
			/>
		</div>
	)
}

export default InputForm
// react  reconciliation (vertual  dom)
// statefull vs stateess
// controlled components vs uncontroled