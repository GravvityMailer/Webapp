import Image from "next/image";
import Btc from "../assets/images/coin_icons/btc.png";
import Ada from "../assets/images/coin_icons/ada.png";
import Bnb from "../assets/images/coin_icons/bnb.png";
import Doge from "../assets/images/coin_icons/doge.png";
import Dot from "../assets/images/coin_icons/dot.png";
import Eth from "../assets/images/coin_icons/eth.png";
import Uni from "../assets/images/coin_icons/uni.png";
import Xrp from "../assets/images/coin_icons/xrp.png";
import Usdt from "../assets/images/coin_icons/usdt.png";
import Usdc from "../assets/images/coin_icons/usdc.png";

const TokenCard = ({ src }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Image src={src} height="30px" width="30px" />
		</div>
	);
};

export const colourOptions = [
	{
		value: null,
		label: "None",
		key: 0,
		code: null,
	},
	{
		value: "Bitcoin Btc",
		label: <TokenCard src={Btc} />,
		key: 1,
		code: "btc",
	},
	{
		value: "Cardano Ada",
		label: <TokenCard src={Ada} />,
		key: 2,
		code: "ada",
	},
	{
		value: "Binance Coin Bnb",
		label: <TokenCard src={Bnb} />,
		key: 3,
		code: "bnb",
	},
	{
		value: "Dogecoin Doge",
		label: <TokenCard src={Doge} />,
		key: 4,
		code: "doge",
	},
	{
		value: "Ethereum Eth",
		label: <TokenCard src={Eth} />,
		key: 5,
		code: "eth",
	},
	{
		value: "Polkadot Dot",
		label: <TokenCard src={Dot} />,
		key: 6,
		code: "dot",
	},
	{
		value: "Uniswap Uni",
		label: <TokenCard src={Uni} />,
		key: 7,
		code: "uni",
	},
	{
		value: "XRP Xrp",
		label: <TokenCard src={Xrp} />,
		key: 8,
		code: "xrp",
	},
	{
		value: "Tether Usdt",
		label: <TokenCard src={Usdt} />,
		key: 9,
		code: "usdt",
	},
	{
		value: "USDC Usdc",
		label: <TokenCard src={Usdc} />,
		key: 10,
		code: "usdc",
	},
];
