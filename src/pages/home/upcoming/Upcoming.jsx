import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import "../style.scss";
import useFetchData from "../../../hooks/useFetchData";
import Carousel from "../../../components/carousel/Carousel";

const Upcoming = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetchData(`/${endpoint}/upcoming`);

    const onTabSwitch = (tab) => {
        setEndpoint((tab === "Movies") ? "movie" : "tv");
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Coming Soon...</span>
                <SwitchTab data={ ["Movies", "Shows"] } onTabSwitch={ onTabSwitch } />
            </ContentWrapper>
            <Carousel data={ data?.results } loading={ loading } mediaType={ endpoint } />
        </div>
    )
}

export default Upcoming;