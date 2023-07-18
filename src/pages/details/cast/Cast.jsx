import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import LazyImg from "../../../components/lazyLoadImg/LazyImg";
import avatar from "../../../assets/user-icon.png"

const Cast = ({ data, loading }) => {
	const { url } = useSelector((state) => state.home);

	const skeleton = () => {
		return (
			<div className="skItem">
				<div className="circle skeleton"></div>
				<div className="row skeleton"></div>
				<div className="row2 skeleton"></div>
			</div>
		);
	};
	return (
		<div className="castSection">
			<ContentWrapper>
				<div className="sectionHeading">Top Cast</div>
				{ !loading ? (
					<div className="listItems">
						{ data?.map((actor) => {
							let imgUrl = actor.profile_path
								? url.backdropImgPath + actor.profile_path
								: avatar;
							return (
								<div key={ actor.id } className="listItem">
									<div className="profileImg">
										<LazyImg src={ imgUrl } />
									</div>
									<div className="name">{ actor.name }</div>
									<div className="character">
										{ actor.character }
									</div>
								</div>
							);
						}) }
					</div>
				) : (
					<div className="castSkeleton">
						{ skeleton() }
						{ skeleton() }
						{ skeleton() }
						{ skeleton() }
						{ skeleton() }
						{ skeleton() }
					</div>
				) }
			</ContentWrapper>
		</div>
	);
};

export default Cast;