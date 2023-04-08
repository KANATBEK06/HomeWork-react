import React from 'react'
import './button.css'
const Button = (props) => {
	return (
		<button
			type={props.type}
			onClick={props.onClick}
			className='button-add'
		>
			{props.children}
		</button>
	)
}

export default Button
