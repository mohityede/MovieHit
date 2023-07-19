import React, { useRef } from "react";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import MovieCard from "../movieCard/MovieCard";

const Carousel = ({ title, data, loading, mediaType }) => {
    const carouselContaineer = useRef();

    const navigationArrow = (direction) => {
        const container = carouselContaineer.current;
        const scrollAmount = direction === "left"
            ? container.scrollLeft - (container.offsetWidth + 20)
            : container.scrollLeft + (container.offsetWidth + 20);
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
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
                { title && <div className="carouselTitle">{ title }</div> }
                <BsFillArrowLeftSquareFill className="carouselLeftNav arrow" onClick={ () => navigationArrow("left") } />
                <BsFillArrowRightSquareFill className="carouselRightNav arrow" onClick={ () => navigationArrow("right") } />
                { !loading ? (
                    <div className="carouselItems" ref={ carouselContaineer }>
                        { data?.map((movie, ind) => <MovieCard key={ ind } data={ movie } mediaType={ movie.media_type || mediaType || "movie" } fromSearch={ false } />) }
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        { skeletonItem() }
                        { skeletonItem() }
                        { skeletonItem() }
                        { skeletonItem() }
                        { skeletonItem() }
                    </div>
                ) }
            </ContentWrapper>
        </div>
    )
}

export default Carousel;