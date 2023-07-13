import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import "../style.scss";
import useFetchData from "../../../hooks/useFetchData";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetchData(`/trending/all/${endpoint}`);

    const onTabSwitch = (tab) => {
        setEndpoint(tab.toLowerCase());
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={ ["Day", "Week"] } onTabSwitch={ onTabSwitch } />
            </ContentWrapper>
        </div>
    )
}

export default Trending;