import React, { useState } from "react";

function Todo({ name, id, todos, setTodos, editTodo }) {
	const [isChecked, setIsChecked] = useState();

	const checkTodo = () => {
		// const todoTobeChecked = todos.find((todo) => todo.id === id);
		// const index = todos.findIndex((todo) => todo.id === id);
        // const checked = todoTobeChecked.isChecked

		// const newTodos = [...todos];
		// newTodos[index] = {
		// 	...todoTobeChecked,
		// 	isChecked: !checked, // Toggle isChecked
		// };

		// setTodos(newTodos);
        // setIsChecked(checked)
        setIsChecked(!isChecked)
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
