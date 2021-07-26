import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/performance";

//Firebase Config
var config = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
	authDomain: "gravvity.in",
	projectId: "gravvitymailer",
	storageBucket: "gravvitymailer.appspot.com",
	messagingSenderId: "720947852628",
	appId: "1:720947852628:web:0f64a961f371bc0dcfc4c1",
	measurementId: "G-LP88973Z44",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
	// Check that `window` is in scope for the analytics module!
	if (typeof window !== "undefined") {
		// Enable analytics. https://firebase.google.com/docs/analytics/get-started
		if ("measurementId" in config) {
			firebase.analytics();
			firebase.performance();
		}
	}
} else {
	firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
