// /utils/textUtils.ts

/**
 * Truncates a string to the specified length and appends an ellipsis.
 * @param text The text to truncate.
 * @param length The maximum length of the truncated string.
 * @returns The truncated string.
 */
export const truncate = (text: string, length: number): string =>
  text.length > length ? text.slice(0, length) + "..." : text;
