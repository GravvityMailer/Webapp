import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../config/config";
import styles from "./Form.module.css";

const Form = () => {
	const [coinsOptions, setCoinOptions] = useState([
		{
			value: "Loading",
			label: "Loading...",
			disabled: true,
		},
	]);

	const [selectedCoins, setSelectedCoins] = useState([{ name: "Bitcoin" }]);

	useEffect(() => {
		fetch(`${SERVER_URL}/api/v1/coin/all`)
			.then((response) => response.json())
			.then((data) => console.log(data));
			.catch(err=>console.log(err));
	}, []);

	return (
		<div className={styles.formContainer}>
			<div className={styles.formGroup}>
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email
				</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="exampleSelect1" className="form-label">
					Select Coins
				</label>
				<select
					className="form-select"
					id="exampleSelect1"
					onChange={(e) => console.log(e.target.value)}
				>
					{coinsOptions.map((i, j) => {
						return (
							<option key={j} value={i.value} disabled>
								{i.label}
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
							<div className={styles.selectedCoin}>
								<span className={styles.coinName}>{coin.name}</span>
								<i
									className="fa"
									style={{ cursor: "pointer", fontSize: "16px" }}
								>
									&#xf014;
								</i>
							</div>
						);
					})}
				</div>
			)}

			<button type="submit" className="btn btn-primary">
				<p className={styles.buttonText}>subscribe!</p>
			</button>
		</div>
	);
};

export default Form;
