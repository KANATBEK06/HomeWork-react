import { useState } from 'react'
import Button from '../../UI/button/Button'
import ExpenseForm from '../expense-form/ExpenseForm'
import './NewExpense.css'
export const NewExpense = (props) => {
	let [state, setState] = useState(false) // true  // hook
	function addNewButtonHandler() {
		setState((state) => !state)
	}
	return (
		<div className='new-expense'>
			{!state ? (
				<Button onClick={addNewButtonHandler}>
					добавить новый расход
				</Button>
			) : (
				<ExpenseForm
					ondata={props.ondataHandler}
					onAddnewButtonHandler={addNewButtonHandler}
				/>
			)}
		</div>
	)
}

// state
// render
// each component has own state
// lifting up
// children
// keys
