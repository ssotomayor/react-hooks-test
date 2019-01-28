import React, { useState, useEffect } from 'react';

const List = (props) => {
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		console.log(count);
	})

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count+1)}>+1 UP</button>
			<button onClick={() => setCount(0)}>Reset State</button>
		</div>
	);
}

export default List;