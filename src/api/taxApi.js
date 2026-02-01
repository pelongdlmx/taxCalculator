import taxClient from "../utils/network";

export const localFetch = async (url, signal) => {
  const { data } = await taxClient.get(url, { signal });
  return data.tax_brackets;
};
