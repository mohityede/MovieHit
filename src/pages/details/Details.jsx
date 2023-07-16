import React from "react";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Details = () => {

    return (
        <div>
            <DetailsBanner />
        </div>
    )
}

export default Details;