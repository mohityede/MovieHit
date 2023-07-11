import axios from "axios";

const API_TOKEN = process.env.REACT_APP_TMDB_API_TOKEN;
const BASE_URI = "https://api.themoviedb.org/3";

const header = {
    Authorization: "Bearer " + API_TOKEN,
}

export const fetchData = async (url, params) => {
    try {
        console.log("token", API_TOKEN)
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