/* global URL */

/**
 * Transforms query object in string
 *
 * @param {object} [query={name: maksim, age: 30}] query object that should be transformed
 * into string.
 * @returns {string}
 */
export const queryObjectToString = (query, appendQueryChar = true) => {
  const queryFragments = Object
    .keys(query)
    .map(key => `${key}=${query[key]}`);

  const queryString = queryFragments.join('&');

  return appendQueryChar
    ? `?${queryString}`
    : queryString;
};

/**
 * Transforms query string in object
 *
 * @param {string} [query="name=maksim&age=30"] string query that should be transformed
 * into object.
 * @returns {object}
 */
export const queryStringToObject = (query) => {
  const queryObject = {};

  query
    .replace('?', '')
    .split('&')
    .forEach((queryFragment) => {
      const [key, value] = queryFragment.split('=');
      queryObject[key] = value;
    });

  return queryObject;
};

/**
 * Merges queries in one.
 *
 * @param {...string | ...object} queries dynamic number of queries that should be merged in one.
 * @returns {object}
 */
export const mergeQueries = (...queries) => {
  const mergeCandidats = [];

  queries.forEach((query) => {
    const queryObject = typeof query === 'string'
      ? queryStringToObject(query)
      : query;

    mergeCandidats.push(queryObject);
  });

  return Object.assign(...mergeCandidats);
};

/**
 * Injects new (or overrides existing) query arguments in url.
 *
 * @param {string} url target URL where query parameters should be inserted.
 * @param {...string | ...object} queries list of query strings or objects that should be injected
 * in url (divide by comma).
 * @returns {string}
 * @throws exception when URL is incorrect and could not be parsed.
 */
export const pushQueryArguments = (url, ...queries) => {
  try {
    const urlObject = new URL(url);
    const { origin, pathname } = urlObject;

    const urlQueryObject = urlObject && urlObject.search
      ? queryStringToObject(urlObject.search)
      : {};

    const mergedQuery = mergeQueries(urlQueryObject, ...queries);

    return `${origin}${pathname}${queryObjectToString(mergedQuery)}`;
  } catch (e) {
    throw e;
  }
};
