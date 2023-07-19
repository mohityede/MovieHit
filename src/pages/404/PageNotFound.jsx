import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div>
            <div className="pageNotFound">
                <ContentWrapper>
                    <span className="bigText">404</span>
                    <span className="smallText">Page not found!</span>
                </ContentWrapper>
            </div>
        </div>
    )
}

export default PageNotFound;