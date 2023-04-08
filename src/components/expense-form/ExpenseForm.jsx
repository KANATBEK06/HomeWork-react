import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/button/Button";
import InputForm from "../../UI/inputform/InputForm";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [price, setPrice] = useState(0);

  const buttonClickHandler = (event) => {
    event.preventDefault();
    props.onAddnewButtonHandler();
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let data = {
      title,
      date: new Date(date),
      price: Number(price),
    };
    props.ondata(data);
    setTitle("");
    setDate("");
    setPrice("");
  };

  return (
    <form>
      <form className="form-control">
        <div>
          <InputForm
            onChange={titleHandler}
            value={title}
            labelName="Title"
            type="text"
            id="name1"
          />
        </div>
        <div>
          <InputForm
            onChange={priceHandler}
            labelName="Amount"
            id="name2"
            type="number"
            value={price}
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <InputForm
            onChange={dateHandler}
            labelName="Date"
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            id="name3"
            value={date}
          />
        </div>
      </form>
      <div className="buttons">
        <Button type="submit" onClick={buttonClickHandler}>
          Отмена
        </Button>
        <Button onClick={onSubmitHandler}>Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
