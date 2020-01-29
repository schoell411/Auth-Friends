//dependencies
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import Login from "./components/Login";

//stylesheets
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<h1>Friends List App</h1>
				<div>
					<Link to="/login">Login</Link>
				</div>
				<Switch>
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
