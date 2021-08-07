import React from 'react';

export default function Post({ title, body }) {
	return (
		<div
			style={{
				border: '1px solid #000',
				borderRadius: '5px',
				margin: '10px',
			}}
		>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	);
}
