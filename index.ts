import Knex from 'knex'

declare module 'knex' {
  namespace Knex {
    interface QueryInterface<TRecord extends {} = any, TResult = any> {
      firstOrFail: Select<TRecord, TResult extends Array<infer T> ? T : never>
    }
  }
}

Knex.QueryBuilder.extend('firstOrFail', function throwIfNotFound(this) {
  this.limit(1)
  return this.then((results: any) => {
    if (results.length === 0) {
      throw new Error(`Query has no results: "${this.toSQL().sql}"`)
    }
    return results[0]
  }) as any
})
