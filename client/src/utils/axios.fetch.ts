import { ServerURL } from "core/config";
import axios from "axios";

/**
 * Creates axios instance for later use
 */
const axiosFetch = axios.create({
  baseURL: ServerURL,
});

export default axiosFetch;
