# knex-first-or-fail

Add `knex('users').firstOrFail()`.  Plug and play.

# Features

- Includes the TypeScript type definition.
- Works with `select` and `returning`.
- Under 20 LOC

# Install

```sh
yarn add knex-first-or-fail
```

# Usage

```typescript
import 'knex-first-or-fail';

import createKnex from 'knex';

export const knex = createKnex(dbConfig);
```

And you are ready to go.


```typescript
knex('users').where({ id: 1 }).firstOrFail()
```
