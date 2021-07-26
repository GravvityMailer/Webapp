import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../config/config";
import styles from "./Form.module.css";

const Form = ({ activateToast }) => {
	const [emailAddress, setEmail] = useState("");
	const [coinsOptions, setCoinOptions] = useState([]);
	const [selectedCoins, setSelectedCoins] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [defaultSelectValue, setDefaultSelectValue] = useState("default");

	useEffect(() => {
		fetch(`${SERVER_URL}/api/v1/coin/all`)
			.then((response) => response.json())
			.then((data) => setCoinOptions(() => data.message))
			.catch((err) => activateToast("error", "Error While Loading Coins!"));
	}, []);

	const removeFromArray = (coin) => {
		let arrayOfCoins = selectedCoins;
		let index = arrayOfCoins.indexOf(coin);
		if (index > -1) {
			arrayOfCoins.splice(index, 1);
			setSelectedCoins(() => [...arrayOfCoins]);
			return setDefaultSelectValue(() => "default");
		}
	};

	const handleSubscribe = () => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!re.test(emailAddress.toLowerCase().trim()))
			return activateToast("error", "Please Enter Valid Email Address!");

		let email = emailAddress.toLowerCase().trim();

		if (selectedCoins.length === 0)
			return activateToast("error", "Please Select At Least One Coin!");

		if (selectedCoins.length > 3)
			return activateToast("error", "Please Select Max 3 Coins!");

		setIsLoading(() => true);

		fetch(`${SERVER_URL}/api/v1/user/subscribe`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				coins: selectedCoins,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message) return activateToast("success", "Subscribed!");
				else return activateToast("error", data.error);
			})
			.finally(() => {
				setEmail(() => "");
				setSelectedCoins(() => []);
				return setIsLoading(() => false);
			});
	};

	return (
		<div className={styles.formContainer}>
			{console.log(selectedCoins)}
			<div className={styles.formGroup}>
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email
				</label>
				<input
					onChange={(e) => setEmail(() => e.target.value)}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
					value={emailAddress}
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="exampleSelect1" className="form-label">
					Select Coins
				</label>
				<select
					value="default"
					disabled={selectedCoins.length >= 3}
					defaultValue="default"
					className="form-select"
					id="exampleSelect1"
					onChange={(e) =>
						setSelectedCoins(() => [...selectedCoins, e.target.value])
					}
				>
					<option value={"default"} disabled>
						Select...
					</option>
					{coinsOptions.map((i, j) => {
						return (
							<option
								key={j}
								value={i.symbol}
								disabled={selectedCoins.includes(i.symbol)}
							>
								{i.name}
							</option>
						);
					})}
				</select>
				<small id="emailHelp" className="form-text text-muted">
					You can select up to 3 coins.
				</small>
			</div>
			{selectedCoins.length === 0 ? null : (
				<div className={styles.selectedCoinsContainer}>
					{selectedCoins.map((coin, i) => {
						return (
							<div className={styles.selectedCoin} key={i}>
								<span className={styles.coinName}>
									{coinsOptions.filter((i, j) => i.symbol === coin)[0].name}
								</span>
								<i
									className="fa"
									key={coin}
									onClick={() => removeFromArray(coin)}
									style={{ cursor: "pointer", fontSize: "16px" }}
								>
									&#xf014;
								</i>
							</div>
						);
					})}
				</div>
			)}

			{isLoading ? (
				<button type="submit" className="btn btn-primary" disabled>
					<p className={styles.buttonText}>loading!</p>
				</button>
			) : (
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubscribe}
				>
					<p className={styles.buttonText}>subscribe!</p>
				</button>
			)}
		</div>
	);
};

export default Form;
