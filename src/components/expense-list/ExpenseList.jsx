import React from 'react'
import { ExpenseItem } from '../expense-item/ExpenseItem'

const ExpenseList = ({ data }) => {
	return (
		<div>
			{data.map((el) => {
				return (
						<ExpenseItem
							key={el.title}
							date={el.date}
							title={el.title}
							price={el.price}
						/>
					
				)
			})}
		</div>
	)
}

export default ExpenseList
