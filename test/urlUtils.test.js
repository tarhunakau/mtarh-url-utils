/* global expect */

import UrlUtils from '../src';

test('Should has all the set of static methods', () => {
  const listOfMethods = [
    'queryObjectToString',
    'queryStringToObject',
    'mergeQueries',
    'pushQueryQrguments',
  ];

  listOfMethods.forEach((method) => {
    expect({}.hasOwnProperty.call(UrlUtils, method)).toBeTruthy();
  });
});
