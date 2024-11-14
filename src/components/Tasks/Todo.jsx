import React, { useState } from "react";

function Todo({ name }) {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="todo" onClick={() => setIsChecked(!isChecked)}>
			<div className="text">
				<div className={isChecked ? "checkbox checked" : "checkbox"}>
					<i class="fa-solid fa-check"></i>
				</div>
				<p className={isChecked ? "checked" : ""}>{name}</p>
			</div>
			<div className="icons">
				<div className="edit">
					<i class="fa-regular fa-pen-to-square"></i>
				</div>
				<div className="delete">
					<i class="fa-solid fa-trash"></i>
				</div>
			</div>
		</div>
	);
}

export default Todo;
