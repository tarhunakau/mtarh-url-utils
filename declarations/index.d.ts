declare module 'mtarh-url-utils' {
  export const queryObjectToString: (query: object, appendQueryChar: boolean = true) => string;
  export const queryStringToObject = (query: string) => object;
  export const mergeQueries = (...queries: string | object) => object;
  export const pushQueryArguments = (url: string, ...queries: string | object) => string;
}
