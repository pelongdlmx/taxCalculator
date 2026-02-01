/**
 * Fetches tax brackets for a given year.
 *
 * - Aborts any in-flight request before starting a new one
 * - Prevents race conditions caused by rapid user interaction
 *
 * Consumers are expected to handle AbortError explicitly.
 */

import { localFetch } from "./taxApi";
import { BASE_TAX_URL } from "../constants/taxConstants";

let abortController = null;

export const fetchBracketsWithCancellation = async (year) => {
  if (abortController) {
    abortController.abort();
  }

  abortController = new AbortController();

  try {
    return await localFetch(`${BASE_TAX_URL}${year}`, abortController.signal);
  } catch (error) {
    throw error;
  }
};
