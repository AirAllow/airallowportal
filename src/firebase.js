import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

var config = {
	apiKey: "AIzaSyBgIxsYABZc5WCeoVUK0sdmpIZTxX0SkBI",
	authDomain: "fir-authtest-d22fc.firebaseapp.com",
	databaseURL: "https://fir-authtest-d22fc.firebaseio.com",
	projectId: "fir-authtest-d22fc",
	storageBucket: "fir-authtest-d22fc.appspot.com",
	messagingSenderId: "173974499950"
};

export default firebase.initializeApp(config);
