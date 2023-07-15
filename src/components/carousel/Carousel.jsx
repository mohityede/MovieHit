import React, { useRef } from "react";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import LazyImg from "../lazyLoadImg/LazyImg";
import NoPosterAvailable from "../../assets/no-movie-poster.jpg";
import "./style.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircleRating from "../circleRating/CircleRating";

const Carousel = ({ data, loading }) => {
    const carouselContaineer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigationArrow = (direction) => {

    }

    const skeletonItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftSquareFill className="carouselLeftNav arrow" onClick={ () => navigationArrow("left") } />
                <BsFillArrowRightSquareFill className="carouselRightNav arrow" onClick={ () => navigationArrow("right") } />
                { !loading ? (
                    <div className="carouselItems">
                        { data?.map((movie) => {
                            console.log("url", url);
                            const posterUrl = movie.poster_path ? url.backdropImgPath + movie.poster_path : NoPosterAvailable;
                            console.log("posterUrl", posterUrl);
                            return (
                                <div key={ movie.id } className="carouselItem">
                                    <div className="posterBlock">
                                        <LazyImg src={ posterUrl } />
                                        <CircleRating rating={ movie.vote_average.toFixed(1) } />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">{ movie.title || movie.name }</span>
                                        <span className="date">{ dayjs(movie.release_Date).format("MMM D, YYYY") }</span>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        { skeletonItem }
                        { skeletonItem }
                        { skeletonItem }
                        { skeletonItem }
                        { skeletonItem }
                    </div>
                ) }
            </ContentWrapper>
        </div>
    )
}

export default Carousel;