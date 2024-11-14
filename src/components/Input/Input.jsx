import "./input.css";

function Input({ input, setInput, addTodo, inputRef }) {

	const handleInput = (e) => {
		const val = e.target.value;
		setInput(val);
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
			<button onClick={() => addTodo}>Add</button>
		</div>
	);
}

export default Input;
