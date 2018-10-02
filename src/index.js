import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.3.0";

import indexRoutes from "routes/index.jsx";
import SignIn from "views/SignIn/SignIn.jsx";
import firebase from "firebase.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ user });
				console.log("logged in");
				console.log(this.state.user);
			} else {
				this.setState({ user: null });
				console.log("logged out");
			}
		});
	}

	render() {
		let template = this.state.user ? (
			<Router history={hist}>
				<Switch>
					{indexRoutes.map((prop, key) => {
						return (
							<Route path={prop.path} component={prop.component} key={key} />
						);
					})}
				</Switch>
			</Router>
		) : (
			<SignIn />
		);
		return template;
	}
}

const hist = createBrowserHistory();

const auth = firebase.auth();

ReactDOM.render(<App />, document.getElementById("root"));
