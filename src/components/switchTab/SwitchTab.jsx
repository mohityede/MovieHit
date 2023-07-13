import React, { useState } from "react";
import "./style.scss";

const SwitchTab = ({ data, onTabSwitch }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, ind) => {
        setLeft(ind * 100);
        setTimeout(() => {
            setSelectedTab(ind);
        }, 300);
        onTabSwitch(tab, ind);
    }
    return (
        <div className="switchingTabs">
            <div className="tabItems">
                { data.map((tab, index) => (
                    <span
                        key={ index }
                        className={ `tabItem ${selectedTab === index ? "active" : ""}` }
                        onClick={ () => activeTab(tab, index) }>
                        { tab }
                    </span>
                )) }
                <span className="movingBg" style={ { left } } />
            </div>
        </div>
    )
}

export default SwitchTab;