import React from "react";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data: moviesVideos, loading: movieDetailsLoading } = useFetchData(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsDetailsLoading } = useFetchData(`/${mediaType}/${id}/credits`);
    return (
        <div>
            <DetailsBanner trailerVideo={ moviesVideos?.results?.[0] } crew={ credits?.crew } />
        </div>
    )
}

export default Details;