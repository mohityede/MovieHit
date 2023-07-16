import React, { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import LazyImg from "../../../components/lazyLoadImg/LazyImg";
import NoPosterImg from "../../../assets/no-movie-poster.jpg";

const DetailsBanner = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetchData(`/${mediaType}/${id}`);
    const { url } = useSelector((state) => state.home);

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            { !loading ? (
                <>
                    { !!data &&
                        <React.Fragment>
                            <div className="backdrop-img">
                                <LazyImg src={ url.backdropImgPath + data.backdrop_path } />
                            </div>
                            <div className="opacity-layer"></div>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                        { data.poster_path ? (
                                            <LazyImg className="posterImg" src={ url.backdropImgPath + data.poster_path } />
                                        ) : (
                                            <LazyImg className="posterImg" src={ NoPosterImg } />
                                        ) }
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            { `${data?.name || data?.title} (${dayjs(data?.release_dat).format("YYYY")})` }
                                        </div>
                                    </div>
                                </div>
                            </ContentWrapper>
                        </React.Fragment>
                    }
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            ) }
        </div>
    );
};

export default DetailsBanner;