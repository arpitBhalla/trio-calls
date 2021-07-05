import { ServerURL } from "core/const";
import axios from "axios";

/**
 * Creates axios instance for later use
 */
const axiosFetch = axios.create({
  url: ServerURL,
});

export default axiosFetch;
