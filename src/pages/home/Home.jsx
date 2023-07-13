import React from "react";
import "./style.scss";
import Hero from "./hero/Hero";
import Trending from "./trending/Trending";

const Home = () => {
	return (
		<div>
			<Hero />
			<Trending />
			home
			<div style={ { height: 1000 } }></div>
		</div>
	)
}

export default Home;