import React, { Component } from "react";

class Login extends Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" name="username" />
					<input type="password" name="password" />
					<button>Log In</button>
				</form>
			</div>
		);
	}
}

export default Login;
