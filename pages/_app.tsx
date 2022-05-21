import "../styles/globals.css";
import Navbar from "../components/Navbar";

import { GetServerSideProps } from "next";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar></Navbar>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
