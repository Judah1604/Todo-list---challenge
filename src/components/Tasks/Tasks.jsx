import { useState } from "react";
import "./styles/styles.css";
import Todo from "./Todo";

function Tasks({ todos, inputRef }) {
	const [filter, setFilter] = useState("all")

    const onFocus = () => {
        inputRef.current.focus();
    }

	return (
		<div className="tasks">
			{todos.length !== 0 ? 
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
							return <Todo name={todo.name} />;
						})}
					</div>
				</>
			: (<><p className="info">You have no tasks to do yet, <span onClick={() => onFocus}>Add a task here</span></p></>)}
		</div>
	);
}

export default Tasks;
