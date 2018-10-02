import React from "react";
import firebase from "../../firebase.js";
import "tachyons";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const auth = firebase.auth();

const txtEmail = document.getElementById("email-address");
const txtPassword = document.getElementById("password");

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	onSubmitInfo = e => {
		e.preventDefault();
		const { onSignIn } = this.props;
		console.log("Email", this.state.email);
		console.log("Password", this.state.password);
		auth
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(u => {})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { onSignIn } = this.props;
		return (
			<div>
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f2 fw6 ph1 mh0">Air Allow Portal</legend>
								<div className="mt3">
									<label className="db fw6 lh-copy f6" htmlFor="email-address">
										Email
									</label>
									<input
										className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
										type="email"
										name="email-address"
										id="email-address"
										onChange={this.onEmailChange}
									/>
								</div>
								<div className="mv3">
									<label className="db fw6 lh-copy f6" htmlFor="password">
										Password
									</label>
									<input
										className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
										type="password"
										name="password"
										id="password"
										onChange={this.onPasswordChange}
									/>
								</div>
							</fieldset>
							<div className="">
								<input
									onClick={this.onSubmitInfo}
									className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
									type="submit"
									value="Sign in"
								/>
							</div>
							<div className="lh-copy mt3" />
						</div>
					</main>
				</article>
			</div>
		);
	}

	onEmailChange = event => {
		this.setState({ email: event.target.value });
	};
	onPasswordChange = event => {
		this.setState({ password: event.target.value });
	};
}

export default Signin;
