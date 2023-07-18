import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetchData from "../../../hooks/useFetchData";

const Similar = ({ mediaType, id }) => {
    const { data, loading } = useFetchData(
        `/${mediaType}/${id}/similar`
    );
    const title = mediaType === "tv" ? "Similar Shows" : "Similar Movies";

    return data?.results?.length > 0 && (
        <Carousel
            title={ title }
            data={ data?.results }
            loading={ loading }
            mediaType={ mediaType }
        />
    );
};

export default Similar;