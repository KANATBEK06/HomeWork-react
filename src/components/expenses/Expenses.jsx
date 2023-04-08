import React, { useState } from 'react'
import Chart from '../chart/Chart'
import ExpenseFilter from '../expense-filter/ExpenseFilter'
import ExpenseList from '../expense-list/ExpenseList'
import './Expenses.css'
export const Expenses = ({ data }) => {
	const [expenseFilter, setExpenseFilter] = useState('2022')
	function expenseFilterHandler(event) {
		setExpenseFilter(event.target.value)
	}
	const filteredItems = data.filter((element) => {
		const stringFiedYear = element.date.getFullYear().toString()
		return stringFiedYear === expenseFilter
	})

	return (
		<div className='expense-container'>
			<ExpenseFilter
				value={expenseFilter}
				onChange={expenseFilterHandler}
			/>
			<Chart items={filteredItems} />
			<ExpenseList data={filteredItems} />
		</div>
	)
}
