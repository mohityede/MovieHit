import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/movieCard/MovieCard";

const Search = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const { query } = useParams();

    const getInitialData = () => {
        setLoading(true);
        fetchData(`/search/multi?query=${query}&page=${pageNo}`)
            .then((res) => {
                setLoading(false);
                setData(res);
                setPageNo((curr) => curr + 1);
            }).catch((err) => {
                console.error(err);
            })
    }

    const getNextPageData = () => {
        setLoading(true);
        fetchData(`/search/multi?query=${query}&page=${pageNo}`)
            .then((res) => {
                if (data?.results) {
                    setData({ ...data, results: [...data?.results, ...res?.results] });
                } else {
                    setData(res);
                }
                setLoading(false);
                setPageNo((curr) => curr + 1);
            }).catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        setPageNo(1);
        getInitialData();
    }, [query])
    return (
        <div className="searchResultsPage">
            { loading && <Loader initial={ true } /> }
            { !loading && (
                <ContentWrapper>
                    { data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">{ `Search results for ${query}` }</div>
                            <InfiniteScroll
                                className="content"
                                dataLength={ data?.results?.length || [] }
                                hasMore={ pageNo <= data?.total_pages }
                                next={ getNextPageData }
                                loader={ <Loader /> }
                            >
                                { data?.results?.map?.((curr, ind) => {
                                    if (curr.media_type === "person") return;
                                    return <MovieCard key={ ind } data={ curr } mediaType={ curr.media_type } fromSearch={ true } />
                                }) }
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="resultNotFound">Sorry, No result for your query...</span>
                    ) }
                </ContentWrapper>
            )
            }
        </div >
    )
}

export default Search;