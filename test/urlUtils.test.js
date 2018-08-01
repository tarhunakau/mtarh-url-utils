/* global expect */

import {
  queryObjectToString,
  queryStringToObject,
  mergeQueries,
  pushQueryArguments,
} from '../src';

test('All functions should be exported', () => {
  const listOfMethods = [
    queryObjectToString,
    queryStringToObject,
    mergeQueries,
    pushQueryArguments,
  ];

  listOfMethods.forEach((method) => {
    expect(method).toBeTruthy();
  });
});

test('Query object should converts to string', () => {
  expect(queryObjectToString({ name: 'maksim', age: 30 }, true))
    .toEqual('?name=maksim&age=30');

  expect(queryObjectToString({ name: 'maksim', age: 30 }, false))
    .toEqual('name=maksim&age=30');
});

test('Query string should converts to object', () => {
  expect(queryStringToObject('?name=maksim&age=30'))
    .toEqual({ name: 'maksim', age: '30' });

  expect(queryStringToObject('name=maksim&age=30'))
    .toEqual({ name: 'maksim', age: '30' });
});

test('Query arguments should be merged in one', () => {
  expect(mergeQueries('?name=maksim', { age: 30 }))
    .toEqual({ name: 'maksim', age: 30 });
});

test('Query arguments should be pushed in URL', () => {
  expect(pushQueryArguments('https://example.com/?q=search', '?name=maksim', { age: 30 }))
    .toEqual('https://example.com/?q=search&name=maksim&age=30');
});
