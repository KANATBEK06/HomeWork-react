import React from 'react'
import ExpenseDate from '../expense-date/ExpenseDate'
import classes from './ExpenseItem.module.css'
import styled, { StyledComponent } from 'styled-components'




export const ExpenseItem = ({ date, title, price, theme }) => {
	// function addclasses() {
	// 	return `${classes.itemContainer} ${
	// 		theme === 'violet' ? classes.violet : classes.green
	// 	}`
	// }
	return (
		<ItemContainer theme={theme}>
			<ExpenseDate date={date} />
			<div className={classes.expenseDescription}>
				<h2 className='title'>{title}</h2>
				<div className='price'>${price}</div>
			</div>
		</ItemContainer>
	)
}
const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	margin: 1rem 0;
	background-color: #4b4b4b;
	
`