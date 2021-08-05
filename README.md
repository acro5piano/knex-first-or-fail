# knex-first-or-fail

Add `knex('users').firstOrFail()`.  Plug and play.

# Features

- Includes the TypeScript type definition.
- Works with `select` and `returning`.
- 

# Install

```
yarn add knex-first-or-fail
```

# Usage

```typescirpt
import 'knex-first-or-fail';

import createKnex from 'knex';

export const knex = createKnex(dbConfig);
```

And you are ready to go.


```typescirpt
knex('users').where({ id: 1 }).firstOrFail()
```
