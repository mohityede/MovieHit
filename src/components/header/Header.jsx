import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { VscChromeMinimize } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movie-icons.png";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setShowSearch(false);
        }, 1000);
    }, [location]);

    const controlNavbar = () => {
        if (window.scrollY > 150) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const openSearch = () => {
        setShowSearch(true);
        setMobileMenu(false);
    }

    const openMobileMenu = () => {
        setShowSearch(false);
        setMobileMenu(true);
    }

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && searchQuery.length > 0) {
            navigate(`/search/${searchQuery}`);
        }
    }

    const navigationHandler = (type) => {
        navigate(`/explore/${type}`);
        setMobileMenu(false);
    }
    return (
        <header className={ `header ${show} ${mobileMenu ? "mobileView" : ""}` }>
            <ContentWrapper>
                <div className="logo">
                    <img src={ logo } alt="MovieHit logo" onClick={ () => navigate("/MovieHit") } />
                </div>
                <ul className="menuItems">
                    <li className="menuItem" onClick={ () => navigationHandler("movie") }>Movies</li>
                    <li className="menuItem" onClick={ () => navigationHandler("tv") }>Shows</li>
                    <li className="menuItem">
                        <BsSearch onClick={ openSearch } />
                    </li>
                </ul>
                <div className="mobileMenuItems">
                    <BsSearch onClick={ openSearch } />
                    { mobileMenu ?
                        <VscChromeMinimize onClick={ () => setMobileMenu(false) } /> :
                        <TiThMenu onClick={ openMobileMenu } /> }
                </div>
            </ContentWrapper>
            { showSearch &&
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search here..."
                                onChange={ (e) => setSearchQuery(e.target.value) }
                                onKeyUp={ searchQueryHandler }
                            />
                            <VscChromeMinimize onClick={ () => setShowSearch(false) } /> :
                        </div>
                    </ContentWrapper>
                </div>
            }
        </header>
    )
}

export default Header;