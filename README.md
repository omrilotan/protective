# protective [![](https://img.shields.io/npm/v/protective.svg?style=flat-square)](https://www.npmjs.com/package/protective) ![](https://img.shields.io/github/workflow/status/omrilotan/protective/Publish?style=flat-square)
## 🥽 Runtime protective gear

# stringify
Resort to simple string conversion when JSON.stringify fails
```js
import { stringify } from 'protective';

const something = { key: 'Balue' };
something.circular = something;

JSON.stringify(something, null, 2); // TypeError: Converting circular structure to JSON
stringify(something, null, 2); // '[object Object]'
```

# verbose
Add arguments to function error messages
```js
import { verbose } from 'protective';

function myFunction() {
  throw new Error('This is an error');
}

myFunction('one', 'two'); // Error: This is an error

verbose(myFunction)('one', 'two'); // Error: This is an error. Arguments: "one", "two"
```
