import React, { useState } from "react";

export function Traffic() {
	const [color, setColor] = useState(null);
	return (
		<>
			<div className="bar"></div>
			<div className="box">
				<div
					className={`red ${color === "red" ? "light" : null}`}
					onClick={() => setColor("red")}></div>

				<div
					className={`yellow ${color === "yellow" ? "light" : null}`}
					onClick={() => setColor("yellow")}></div>

				<div
					className={`green ${color === "green" ? "light" : null}`}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
}
