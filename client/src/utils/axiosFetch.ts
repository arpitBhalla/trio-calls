import axios from "axios";

const axiosFetch = axios.create({
  url: "http://localhost:4000",
});

export default axiosFetch;
