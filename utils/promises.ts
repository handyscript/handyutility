/// ------------------------------- HANDY Promises © HandyScript 9m/20d/23y -------------------------------
/**
 * Delay the execution of a function
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * The retry function facilitates robust handling of transient failures in asynchronous operations, employing exponential backoff with a specified maximum retry limit.
 * @returns {Promise<T>}
 */
export async function retry<T>(operation: () => Promise<T>, maxAttempts: number = 3, delayMs: number = 1000): Promise<T> {
  let attempt = 0;
  const maxMajorAttempts = 100;
  while (attempt < maxAttempts && attempt < maxMajorAttempts) {
    try {
      return await operation();
    } catch (error) {
      attempt++;
      if (attempt < maxAttempts) {
        await delay(delayMs * 2 ** attempt);
      } else {
        throw error; // Rethrow the error after max attempts
      }
    }
  }
  throw new Error("Max retry attempts reached");
}
