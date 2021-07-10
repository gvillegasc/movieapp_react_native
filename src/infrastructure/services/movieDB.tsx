import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "54a3b24c28fbd03f5fc071856b5b5bc2",
    language: "es-ES",
  },
});

export default movieDB;
