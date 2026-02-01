import axios from "axios";
import { logger } from "./logger";

const taxClient = axios.create({
  baseURL: "/api-docker/",
  timeout: 5000,
});

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

taxClient.interceptors.response.use(
  (response) => {
    logger.track("API_SUCCESS", { url: response.config.url });
    return response;
  },
  async (error) => {
    const { config, response } = error;

    if (response?.status === 500) {
      const retryCount = (config.__retryCount || 0) + 1;
      logger.warn(`Network Retry Attempt ${retryCount}`, { url: config.url });
    } else {
      logger.error(`API_ERROR: ${error.message}`, { status: response?.status });
    }

    if (!config || response?.status !== 500) {
      return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;

    if (config.__retryCount >= MAX_RETRIES) {
      return Promise.reject(error);
    }

    config.__retryCount += 1;
    console.warn(`Error 500 detected. Retry #${config.__retryCount}`);

    const backoff = new Promise((resolve) => {
      setTimeout(() => resolve(), RETRY_DELAY * config.__retryCount);
    });

    await backoff;
    return taxClient(config);
  },
);

export default taxClient;
