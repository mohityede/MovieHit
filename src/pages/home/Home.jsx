import React from "react";
import "./style.scss";
import Hero from "./hero/Hero";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";

const Home = () => {
	return (
		<div>
			<Hero />
			<Trending />
			<Popular />
			<TopRated />
			<Upcoming />
		</div>
	)
}

export default Home;