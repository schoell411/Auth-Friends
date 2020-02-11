//dependencies
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import Login from "./components/Login";
import FriendList from "./components/friends/FriendList";
import PrivateRoute from "./PrivateRoute";

//stylesheets
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<h1>Friends List App</h1>
				<div>
					<Link to="/protected">Friends List</Link>
				</div>
				<Switch>
					<PrivateRoute path="/protected">
						<FriendList />
					</PrivateRoute>
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
