import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6f6d7ce50a04ccd3688613552587659a",
    language: "ko-KR"
  }
})

export default instance;