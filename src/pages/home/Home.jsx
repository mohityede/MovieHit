import React from "react";
import "./style.scss";
import Hero from "./hero/Hero";

const Home = () => {
	return (
		<div>
			<Hero />
			home
			<div style={ { height: 1000 } }></div>
		</div>
	)
}

export default Home;