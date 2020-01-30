import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
	return axios.create({
		headers: {
			authorization: localStorage.getItem("token")
		}
	});
};

const Friend = props => {
	const removeFriend = e => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`http://localhost:5000/api/friends/${props.friend.id}`)
			.then(result => {
				props.updateFriends(result.data);
			});
	};

	return (
		<div>
			<h1>Name: {props.friend.name}</h1>
			<h2>Age: {props.friend.age}</h2>
			<h2>Email: {props.friend.email}</h2>
			<button onClick={removeFriend}>Delete</button>
		</div>
	);
};

export default Friend;
