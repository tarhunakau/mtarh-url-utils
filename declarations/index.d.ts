declare module 'mtarh-url-utils' {
  export type AnyObject = {
    [key: string]: any;
  }

  export const queryObjectToString: (query: AnyObject, appendQueryChar: boolean) => string;
  export const queryStringToObject: (query: string) => AnyObject;
  export const mergeQueries: (...queries: (string | AnyObject)[]) => AnyObject;
  export const pushQueryArguments: (url: string, ...queries: (string | AnyObject)[]) => string;
}
