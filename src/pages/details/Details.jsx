import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetchData from "../../hooks/useFetchData";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Similars from "./carousels/Similar";
import Recommendations from "./carousels/Recommendations";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data: moviesVideos, loading: movieDetailsLoading } = useFetchData(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsDetailsLoading } = useFetchData(`/${mediaType}/${id}/credits`);
    return (
        <div>
            <DetailsBanner trailerVideo={ moviesVideos?.results?.[0] } crew={ credits?.crew } />
            <Cast data={ credits?.cast } loading={ creditsDetailsLoading } />
            <VideosSection data={ moviesVideos } loading={ movieDetailsLoading } />
            <Similars mediaType={ mediaType } id={ id } />
            <Recommendations mediaType={ mediaType } id={ id } />
        </div>
    )
}

export default Details;