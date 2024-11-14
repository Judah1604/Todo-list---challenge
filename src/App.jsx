import { useRef, useState } from "react";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Tasks";
import "./Styles/base.css";

function App() {
	const [input, setInput] = useState(""),
		[todos, setTodos] = useState([]),
		[todo, setTodo] = useState({
			id: Math.floor(Math.random() * 100000),
			name: input,
			isChecked: false,
		}),
        inputRef = useRef();

	const addTodo = () => {
        setTodos(prevTodos => prevTodos.push(todo))
        
    };
	return (
		<>
			<div className="container">
				<h1 className="header">Todo App</h1>
				<Input
					input={input}
					setInput={setInput}
					addTodo={addTodo}
					inputRef={inputRef}
				/>
				<Tasks input={input} todos={todos} inputRef={inputRef} />
			</div>
		</>
	);
}

export default App;
