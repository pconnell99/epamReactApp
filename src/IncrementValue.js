/** Increments/decrements a value - Using React.createElement */
import React, { useState } from "react";

export function IncrementValue() {
	const [count, setCount] = useState(0);

	return React.createElement(
		"div",
		{},
		React.createElement(
			"button",
			{
				onClick: () => {
					setCount(count + 1);
				},
				className: "button",
			},
			"Increment"
		),
		React.createElement("span", {}, ` ${count} `),
		React.createElement(
			"button",
			{
				onClick: () => {
					setCount(count - 1);
				},
				className: "button",
			},
			"Decrement"
		)
	);
}
