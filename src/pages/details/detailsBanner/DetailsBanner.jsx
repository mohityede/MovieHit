import React, { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import LazyImg from "../../../components/lazyLoadImg/LazyImg";
import NoPosterImg from "../../../assets/no-movie-poster.jpg";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import { PlayButton } from "../playButton/PlayButton";

const DetailsBanner = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetchData(`/${mediaType}/${id}`);
    const { url } = useSelector((state) => state.home);

    const genresIdArr = data?.genres?.map((g) => g.id);

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
                                        <div className="subtitle">
                                            { data.tagline }
                                        </div>
                                        <Genres data={ genresIdArr } />
                                        <div className="row">
                                            <CircleRating rating={ data?.vote_average.toFixed(1) } />
                                            <span style={ { color: "green" } }>votes:{ data?.vote_count }</span>
                                            <div className="playbtn">
                                                <PlayButton />
                                                <span className="text">Watch Trailer</span>
                                            </div>
                                        </div>
                                        <div className="overview">
                                            <div className="heading">Overview</div>
                                            <div className="description">{ data.overview }</div>
                                        </div>
                                        <div className="info">
                                            { data.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">Status:{ " " }</span>
                                                    <span className="text">{ data.status }</span>
                                                </div>
                                            ) }
                                            { data.release_date && (
                                                <div className="infoItem">
                                                    <span className="text bold">Release Data:{ " " }</span>
                                                    <span className="text">{ dayjs(data.release_date).format("MMM D,YYYY") }</span>
                                                </div>
                                            ) }
                                            { data.runtime && (
                                                <div className="infoItem">
                                                    <span className="text bold">Runtime:{ " " }</span>
                                                    <span className="text">{ toHoursAndMinutes(data.runtime) }</span>
                                                </div>
                                            ) }
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