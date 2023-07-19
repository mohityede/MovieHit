import React from "react";
import "./style.scss";

const Loader = ({ initial }) => {
    return (
        <div className={ `loadingLoader ${initial ? "initial" : ""}` }>
            <svg className="loader" viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </div>
    );
};

export default Loader;