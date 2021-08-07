import React, { useEffect, Component, useState } from 'react';

import Post from './Post';
import axios from 'axios';
// export default class Posts extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			posts: [],
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{this.state.posts.map((post) => {
// 					return <Post title={post.title} body={post.body} />;
// 				})}
// 			</div>
// 		);
// 	}

// 	componentDidMount() {
// 		// fetch('https://jsonplaceholder.typicode.com/posts')
// 		// 	.then((response) => {
// 		// 		return response.json();
// 		// 	})
// 		// 	.then((posts) => {
// 		// 		// let first50 = posts.slice(0, 5);
// 		// 		this.setState({ posts: posts });
// 		// 	})
// 		// 	.catch((err) => {
// 		// 		console.log(err);
// 		// 	});

// 		axios
// 			.get('https://jsonplaceholder.typicode.com/posts')
// 			.then((response) => {
// 				console.log(response.data);
// 				this.setState({ posts: response.data });
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}
// }

export default function Posts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function getPostData() {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts'
			);
			const posts = await response.json();
			setPosts(posts);
		}

		getPostData();
	}, []);

	return (
		<div>
			{posts.map((post) => {
				return (
					<Post key={post.id} title={post.title} body={post.body} />
				);
			})}
		</div>
	);
}
