import axios from "axios";

const axiosFetch = axios.create({
  url: "localhost:4000",
});

export default axiosFetch;
