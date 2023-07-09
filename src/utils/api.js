import axios from "axios";

const API_TOKEN = import.meta.env.TMDB_API_TOKEN
const BASE_URI = "https://api.themoviedb.org/3"

const header = {
    Authorization: "Bearer " + API_TOKEN,
}

export const fetchData = async (url, params) => {
    try {
        const res = await axios.get(BASE_URI + url, {
            headers: header,
            params: params
        })
        return res.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}