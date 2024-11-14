import React, { useState } from "react";

function Todo({ name, id, todos, setTodos, editTodo }) {
	const [isChecked, setIsChecked] = useState(false);

	const checkTodo = () => {
		const todoTobeChecked = todos.filter((todo) => todo.id == id);
		todoTobeChecked.isChecked = isChecked;
		setIsChecked(!isChecked);
	};

	const deleteTodo = () => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	return (
		<div className="todo">
			<div className="text">
				<div
					className={isChecked ? "checkbox checked" : "checkbox"}
					onClick={() => checkTodo()}
				>
					<i className="fa-solid fa-check"></i>
				</div>
				<p className={isChecked ? "checked" : ""}>{name}</p>
			</div>
			<div className="icons">
				<div className="edit" onClick={() => editTodo(id)}>
					<i className="fa-regular fa-pen-to-square"></i>
				</div>
				<div className="delete" onClick={() => deleteTodo()}>
					<i className="fa-solid fa-trash"></i>
				</div>
			</div>
		</div>
	);
}

export default Todo;
