import { useRef, useState } from "react";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Tasks";
import "./Styles/base.css";

function App() {
	const [todos, setTodos] = useState([]),
		[isEditing, setIsEditing] = useState(false),
		[input, setInput] = useState(""),
		[edit, setEdit] = useState({}),
		inputRef = useRef();

	const updateTodo = () => {
		const newTodos = [...todos];
		newTodos[edit.index] = {
			...edit.todoTobeEdited,
			name: input, 
		};
		setTodos(newTodos);
		setInput("");
		setIsEditing(false);
	};

	const editTodo = (id) => {
		setIsEditing(true);
		const todoTobeEdited = todos.find((todo) => todo.id == id);
		setInput(todoTobeEdited.name);
        setEdit({todoTobeEdited: todoTobeEdited, index: todos.findIndex((todo) => todo.id == id)})
	};

	return (
		<>
			<div className="container">
				<h1 className="header">Todo App</h1>
				<Input
					inputRef={inputRef}
					setTodos={setTodos}
					todos={todos}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
					input={input}
					setInput={setInput}
                    updateTodo={updateTodo}
				/>
				<Tasks
					todos={todos}
					setTodos={setTodos}
					inputRef={inputRef}
                    editTodo={editTodo}
				/>
			</div>
		</>
	);
}

export default App;
