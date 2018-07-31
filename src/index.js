/* global URL */

class UrlUtils {
  /**
   * Transforms query object in string
   *
   * @param {object} [query={name: maksim, age: 30}] query object that should be transformed
   * into string.
   * @returns {string}
   */
  static queryObjectToString(query, appendQueryChar = true) {
    const queryFragments = Object
      .keys(query)
      .map(key => `${key}=${query[key]}`);

    const queryString = queryFragments.join('&');

    return appendQueryChar
      ? `?${queryString}`
      : queryString;
  }

  /**
   * Transforms query string in object
   *
   * @param {string} [query="name=maksim&age=30"] string query that should be transformed
   * into object.
   * @returns {object}
   */
  static queryStringToObject(query) {
    const cleanQuery = query.replace('?', '');
    const queryObject = {};

    cleanQuery
      .split('&')
      .forEach((queryFragment) => {
        const [key, value] = queryFragment.split('=');
        queryObject[key] = value;
      });

    return queryObject;
  }

  /**
   * Merges queries in one.
   *
   * @param {...string | ...object} queries dynamic number of queries that should be merged in one.
   * @returns {object}
   */
  static mergeQueries(...queries) {
    const mergeCandidats = [];

    queries.forEach((query) => {
      const queryObject = typeof query === 'string'
        ? UrlUtils.queryStringToObject(query)
        : query;

      mergeCandidats.push(queryObject);
    });

    return Object.assign(...mergeCandidats);
  }

  /**
   * Injects new (or overrides existing) query arguments in url.
   *
   * @param {string} url target URL where query parameters should be inserted.
   * @param {...string | ...object} queries list of query strings or objects that should be injected
   * in url (divide by comma).
   * @returns {string}
   * @throws exception when URL is incorrect and could not be parsed.
   */
  static pushQueryQrguments(url, ...queries) {
    try {
      const urlObject = new URL(url);

      const urlQueryObject = urlObject && urlObject.search
        ? UrlUtils.queryStringToObject(urlObject.search)
        : {};

      const mergedQuery = UrlUtils.mergeQueries(urlQueryObject, ...queries);

      return `${urlObject.origin}${urlObject.pathname}${UrlUtils.queryObjectToString(mergedQuery)}`;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UrlUtils;
