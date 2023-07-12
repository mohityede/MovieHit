import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetchData from "../../../hooks/useFetchData";
import { useSelector } from "react-redux";

const Hero = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [backgroundImg, setBackgroundImg] = useState("");
	const navigate = useNavigate();
	const { url } = useSelector(state => state.home);

	const { data, loading } = useFetchData("/movie/upcoming");

	useEffect(() => {
		if (data) {
			const result = data.results;
			const bg = url.backdropImgPath + result[Math.floor(Math.random() * result.length)].backdrop_path;
			setBackgroundImg(bg);
		}
	}, [data]);


	const searchQueryHandler = (e) => {
		if (e.key === "Enter" && searchQuery.length > 0) {
			navigate(`/search/${searchQuery}`);
		}
	}
	return (
		<div>
			<div className="heroBanner">
				<div className="wrapper">
					<div className="heroBannerContent">
						<span className="title">
							Welcome To MovieHit
						</span>
						<span className="subTitle">
							Find your Movie here.
						</span>
						<div className="searchInput">
							<input
								type="text"
								placeholder="Search here..."
								onChange={ (e) => setSearchQuery(e.target.value) }
								onKeyUp={ searchQueryHandler }
							/>
							<button>Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero;