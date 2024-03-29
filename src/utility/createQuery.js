/**
 * @breif Create a search query string with each field separated by "&"
 * @param {Object} query -> Search query string
 * @return {String}
 */
export default createQuery = (query) => {
  const searchQuery = [];

  // Build query string
  Object.entries(query).forEach(([key, value]) => {
    if (value && value !== "-1") {
      searchQuery.push(`${key}=${value}`);
    }
  });

  // Join the array into a string with '&' separator
  return searchQuery.join("&");
};
