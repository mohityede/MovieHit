import React from "react";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data: moviesVideos, loading: movieDetailsLoading } = useFetchData(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsDetailsLoading } = useFetchData(`/${mediaType}/${id}/credits`);
    return (
        <div>
            <DetailsBanner trailerVideo={ moviesVideos?.results?.[0] } crew={ credits?.crew } />
            <Cast data={ credits?.cast } loading={ creditsDetailsLoading } />
            <VideosSection data={ moviesVideos } loading={ movieDetailsLoading } />
        </div>
    )
}

export default Details;