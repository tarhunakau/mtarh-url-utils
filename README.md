# MTarh URL Utils
The library provides extra-small and lightweight utils for working with URLs: convert query arguments to objects, convers objects to strings, merge queries to one, push query items into URL. TypeScript definitions included.

### Installation
```
npm i --save mtarh-url-utils
```

### queryObjectToString = (query, appendQueryChar = true)
Accepts plain object to be searilized into string query. The function has optional boolean argument for adding the '?' char at the string beginning.
```
import { queryObjectToString } from 'mtarh-url-utils';

const query = queryObjectToString({ name: 'Maksim', age: 30 });
// query = '?name=Maksim&age=30';
```

### queryStringToObject = (query)
Works as queryObjectToString but in reverse way - it creates a plain object from query string.
```
import { queryStringToObject } from 'mtarh-url-utils';

const query = queryStringToObject('?name=Maksim&age=30');
// query = { name: 'Maksim', age: '30' };
```

### mergeQueries = (...queries)
Allows to combine queries into one object. Accepts a list of arguments where you can pass string variant of query or object.
```
import { mergeQueries } from 'mtarh-url-utils';

const query = mergeQueries('?name=maksim', { age: 30 });
// query = { name: 'maksim', age: 30 };
```

### pushQueryArguments = (url, ...queries)
Injects queryies into url. Queries is a list and you can pass strings and objects as queries that should be pushed into url
```
import { pushQueryArguments } from 'mtarh-url-utils';

const url = pushQueryArguments('https://example.com/?q=search', '?name=maksim', { age: 30 });
// url = 'https://example.com/?q=search&name=maksim&age=30';
```

# Fill you free to suggest new features or report defects or suggestions
