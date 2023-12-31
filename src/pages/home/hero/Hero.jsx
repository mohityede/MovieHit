import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetchData from "../../../hooks/useFetchData";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import LazyImg from "../../../components/lazyLoadImg/LazyImg";

const Hero = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [backgroundImg, setBackgroundImg] = useState("");
	const navigate = useNavigate();
	const { url } = useSelector(state => state.home);
	const { data, loading } = useFetchData("/movie/upcoming");

	useEffect(() => {
		if (!data?.results) return;
		const result = data.results;
		const bg = url.backdropImgPath + result[Math.floor(Math.random() * result.length)].backdrop_path;
		setBackgroundImg(bg);
	}, [data]);

	const searchQueryHandler = (e) => {
		if (e.type === "click" || (e.key === "Enter" && searchQuery.length > 0)) {
			navigate(`/search/${searchQuery}`);
		}
	}
	return (
		<div className="heroBanner">
			{ !loading && <div className="backdrop-img">
				<LazyImg src={ backgroundImg } />
			</div> }
			<div className="opacity-layer"></div>
			<ContentWrapper>
				<div className="heroBannerContent">
					<span className="title">
						Welcome To MovieHit
					</span>
					<span className="subTitle">
						Find your favorites Movie here.
					</span>
					<div className="searchInput">
						<input
							type="text"
							placeholder="Search here..."
							onChange={ (e) => setSearchQuery(e.target.value) }
							onKeyUp={ searchQueryHandler }
						/>
						<button onClick={ (e) => searchQueryHandler(e) }>Search</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	)
}

export default Hero;