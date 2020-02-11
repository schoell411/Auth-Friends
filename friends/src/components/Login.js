import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
	state = {
		credentials: {
			username: "",
			password: ""
		},
		isLoggedIn: false
	};

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	login = e => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", this.state.credentials)
			.then(res => {
				console.log("response", res);
				// const data = res;
				localStorage.setItem("token", res.payload);
				this.setState({ ...this.state, isLoggedIn: true });
			});
	};

	componentDidMount() {
		if (localStorage.getItem("token")) {
			this.setState({ ...this.state, isLoggedIn: true });
		} else {
			this.setState({ ...this.state, isLoggedIn: false });
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.isLoggedIn ? "Logged In" : "Please Log In"}</p>
				<form onSubmit={this.login}>
					<input
						type="text"
						name="username"
						placeholder="Lambda School"
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="i<3Lambd4"
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
}

export default Login;
