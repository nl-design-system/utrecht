/**
 * Find the first item in an array
 */
export const firstItem = <T>(items: T[]): T | undefined => (items.length >= 1 ? items[0] : undefined);

/**
 * Find the last item in an array
 */
export const lastItem = <T>(items: T[]): T | undefined => (items.length >= 1 ? items[items.length - 1] : undefined);

/**
 * Find the next item in an array, compared to an item in the array
 */
export const nextItem = <T>(items: T[], item: T): T | undefined => {
  const currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex + 1 <= items.length - 1 ? items[currentIndex + 1] : undefined;
};

/**
 * Find the previous item in an array, compared to an item in the array
 */
export const previousItem = <T>(items: T[], item: T): T | undefined => {
  const currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex - 1 <= items.length - 1 ? items[currentIndex - 1] : undefined;
};
