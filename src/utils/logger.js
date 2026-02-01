const isDev = import.meta.env.DEV;

export const logger = {
  info: (message, data = "") => {
    if (isDev)
      console.log(
        `%c[INFO]: ${message}`,
        "color: #3b82f6; font-weight: bold",
        data,
      );
  },
  warn: (message, data = "") => {
    if (isDev) console.warn(`[WARN]: ${message}`, data);
  },
  error: (message, error = "") => {
    console.error(
      `%c[ERROR]: ${message}`,
      "color: #ef4444; font-weight: bold",
      error,
    );
  },

  track: (event, metadata = {}) => {
    if (isDev)
      console.debug(`%c[TRACKING]: ${event}`, "color: #10b981", metadata);
  },
};
