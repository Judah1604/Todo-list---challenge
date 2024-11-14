import { useState } from "react";
import "./input.css";

function Input({
	inputRef,
	setTodos,
	todos,
	isEditing,
    editTodo,
	input,
	setInput,
    updateTodo
}) {

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const addTodo = (e) => {
		if (input == "") {
			alert("Please be sure to input your task before submitting");
			return;
		}

		e.preventDefault();

		const newTodo = {
			id: Math.floor(Math.random() * 100000),
			name: input,
			isChecked: false,
		};
		const newTodos = [newTodo, ...todos];
		setTodos(newTodos);
		setInput("");
	};

	return (
		<div className="input">
			<input
				type="text"
				placeholder="Write your task..."
				value={input}
				onChange={(e) => handleInput(e)}
				ref={inputRef}
			/>
			<button
				className={isEditing ? "d-none" : ""}
				onClick={(e) => addTodo(e)}
			>
				Add
			</button>
			<button
				className={isEditing ? "" : "d-none"}
				onClick={() => updateTodo()}
			>
				Update
			</button>
		</div>
	);
}

export default Input;
