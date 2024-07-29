import React from "react";

import Header from "./components/header";
import AirdropCard from "./components/airdropCard";
import PromotCard from "./components/promotCard";
import './assets/styles/styles.global.scss'

function App() {

	return (
		<div className="App">
			<div className="background"></div>
			<Header />
			<div className="home">
				<AirdropCard />
			</div>
			<PromotCard />
		</div>
	);
}

export default App;