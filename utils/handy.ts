/// ------------------------------- HANDY Utlils © HandyScript 9m/20d/23y -------------------------------
import axios from "axios";

/**
 * Retrieve the IP address of the current machine
 * @returns {Promise<string>} as IP address
 */
export async function IPify(): Promise<string> {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    throw new Error("Failed to retrieve IP address");
  }
}

/**
 * Extract the search params from a URL
 * @example
 * const url = new URL("https://www.google.com/search?q=handyscript");
 * searchParamsSerializer(url) // {q: "handyscript"}
 */
export function searchParamsSerializer(url: URL): Record<string, string> {
  const params: Record<string, string> = {};
  // Convert the entries to an array and iterate over it
  Array.from(url.searchParams.entries()).forEach(([key, value]) => {
    params[key] = value;
  });
  return params;
}
