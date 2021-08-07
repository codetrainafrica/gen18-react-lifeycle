import React, { useEffect, useState } from 'react';

// export default class TestComponent extends Component {
// 	constructor(props) {
// 		super(props);
// 		console.log('constructor');
// 	}

// 	render() {
// 		console.log('render');
// 		return <div></div>;
// 	}

// 	componentWillMount() {
// 		console.log('componentWillMount');
// 	}

// 	componentDidMount() {
// 		console.log('componentDidMount');
// 	}
// }

export default function TestComponent({ id }) {
	const [state, setstate] = useState(0);

	console.log('constructor');
	console.log('componentWillMount');

	useEffect(() => {
		console.log('componentDidMount');
		//code to get blog articles from online site
	}, []);

	console.log('render');
	return <div></div>;
}
