import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTc4N2YzNTAwYjNhNWZhY2M0NjdjNWM3OGYzNWE1OSIsInN1YiI6IjYwOGU2MDE2NjUxN2Q2MDAyOWYyNTk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYO7CWE2wKcr06ZNYXatO97W-Eu82hCAIjf6EtpJLpY";
const BASE_URI = "https://api.themoviedb.org/3";

const header = {
    Authorization: "Bearer " + API_TOKEN,
}

export const fetchData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URI + url, {
            headers: header,
            params: params
        })
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}