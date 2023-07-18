import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetchData from "../../../hooks/useFetchData";

const Recommendations = ({ mediaType, id }) => {
    const { data, loading } = useFetchData(
        `/${mediaType}/${id}/recommendations`
    );

    return data?.results?.length > 0 && (
        <Carousel
            title="Recommendations"
            data={ data?.results }
            loading={ loading }
            mediaType={ mediaType }
        />
    );
};

export default Recommendations;