import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebaseApp from "../../firebase.js";
import firebase from "firebase";

const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: "popup",
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: "/airallowportal",
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	]
};

class SignIn extends React.Component {
	render() {
		return (
			<div>
				<h1>Air Allow Portal</h1>
				<p>Please sign-in:</p>
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebaseApp.auth()}
				/>
			</div>
		);
	}
}

export default SignIn;
