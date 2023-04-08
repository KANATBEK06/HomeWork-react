
import { useState } from 'react'
import { Expenses } from './components/expenses/Expenses'
import { NewExpense } from './components/new-expenses/NewExpense'
import './App.css'
// import styled from './components/expense-item/ExpenseItem.module.css'
function App() {
	const [expense, setExpense] = useState([
		{
			date: new Date(2022, 7, 14),
			title: ' a4 Туалетная бумага',
			price: 300,
		},
		{
			date: new Date(2022, 7, 14),
			title: 'Телефон',
			price: 9300,
		},
	])
	const dataExpenseHandler = (data) => {
		const updatedExpense = [...expense]
		updatedExpense.push(data)
		setExpense(updatedExpense)
	}
	return (
		<div className='App'>
			<NewExpense ondataHandler={dataExpenseHandler} />
			<Expenses data={expense} />
			
		</div>
	)
}

export default App

// styling css vs styled components vs css modules
