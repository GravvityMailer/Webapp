import "../styles/globals.css";
import { analytics } from "../config/firebase";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
