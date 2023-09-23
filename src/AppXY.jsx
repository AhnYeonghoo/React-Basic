import './AppXY.css';
import React, { useState } from 'react';

export default function AppXY() {
	const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	return (
		<div
			className='container'
			onPointerMove={(event) => {
				setPosition((prev) => ({ ...prev, x: event.clientX }));
			}}
		>
			<div
				className='pointer'
				style={{
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
		</div>
	);
}
