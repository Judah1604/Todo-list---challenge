import { useState } from "react";
import Todo from './Todo'
import "./styles/styles.css";

function Tasks({ todos, setTodos, inputRef, setIsEditing, editTodo }) {
	const [filter, setFilter] = useState("all");

	const onFocus = () => {
		inputRef.current.focus();
	};

	return (
		<div className="tasks">
			{todos.length !== 0 ? (
				<>
					<div className="toggles">
						<div
							className={
								filter === "all" ? "toggle active" : "toggle"
							}
							onClick={() => setFilter("all")}
						>
							All
						</div>
						<div
							className={
								filter === "unchecked"
									? "toggle active"
									: "toggle"
							}
							onClick={() => setFilter("unchecked")}
						>
							Unchecked
						</div>
					</div>
					<div className="todos">
						{todos.map((todo) => {
							return (
								<Todo
									key={todo.id}
									name={todo.name}
									id={todo.id}
									todos={todos}
									setTodos={setTodos}
                                    editTodo={editTodo}
								/>
							);
						})}
					</div>
				</>
			) : (
				<>
					<p className="info">
						You have no tasks to do yet,{" "}
						<span onClick={() => onFocus()}>Add a task here</span>
					</p>
				</>
			)}
		</div>
	);
}

export default Tasks;
