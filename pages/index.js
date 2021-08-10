import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../assets/images/logo.svg";
import Form from "../components/Form/Form";
import styles from "../styles/Home.module.css";

export default function Home() {
	const showToast = (type, message) => {
		const options = {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		};

		if (type === "error") {
			return toast.error(message, options);
		} else {
			return toast.info(message, options);
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Gravvity: Realtime Stock Prices in just 1 Mail!</title>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="An email based newsletter which provides realtime updates of crypto-currency prices in just 1 email!"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
					integrity="sha384-9+PGKSqjRdkeAU7Eu4nkJU8RFaH8ace8HGXnkiKMP9I9Te0GJ4/km3L1Z8tXigpG"
					crossorigin="anonymous"
				></link>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
			</Head>
			<div className={styles.parentMainContainer}>
				<main className={styles.mainContainer}>
					<Image src={Logo} className={styles.logo} />
					<section className={styles.header}>
						<h1 className={styles.heading}>Realtime Crypto Updates</h1>
						<p className={styles.subHeading}>
							Get <span className={styles.bold}>realtime</span> price updates of
							your favourite crypto-coins just in{" "}
							<span className={styles.bold}>1 email</span>!
						</p>
					</section>
					<Form activateToast={(type, message) => showToast(type, message)} />
					<footer>
						<h1 className={styles.logoHeading}>gravvity.in</h1>
						<p
							style={{
								textAlign: "center",
								marginTop: "20px",
								marginBottom: "20px",
								fontSize: "16px",
								fontFamily: "PoppinsRegular",
							}}
						>
							By{" "}
							<span style={{ textDecoration: "underline" }}>
								<Link href="https://adityakrishna.xyz">
									<a target="_blank">AK</a>
								</Link>
							</span>
						</p>
					</footer>
				</main>
			</div>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<a
				href="https://www.producthunt.com/posts/gravvity?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gravvity"
				target="_blank"
			>
				<img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=307884&theme=dark"
					alt="Gravvity - Real-time crypto prices in just one email!  | Product Hunt"
					style={{ width: "250px", height: "54px", margin: "25px" }}
					width="250"
					height="54"
				/>
			</a>
		</div>
	);
}
