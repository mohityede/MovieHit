import React from "react";
import "./style.scss";

// component to center a content of page
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{ children }</div>;
};

export default ContentWrapper;