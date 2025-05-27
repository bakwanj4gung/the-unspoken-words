
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TemporaryUser
 * 
 */
export type TemporaryUser = $Result.DefaultSelection<Prisma.$TemporaryUserPayload>
/**
 * Model Mood
 * 
 */
export type Mood = $Result.DefaultSelection<Prisma.$MoodPayload>
/**
 * Model Letter
 * 
 */
export type Letter = $Result.DefaultSelection<Prisma.$LetterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temporaryUser`: Exposes CRUD operations for the **TemporaryUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemporaryUsers
    * const temporaryUsers = await prisma.temporaryUser.findMany()
    * ```
    */
  get temporaryUser(): Prisma.TemporaryUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mood`: Exposes CRUD operations for the **Mood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moods
    * const moods = await prisma.mood.findMany()
    * ```
    */
  get mood(): Prisma.MoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.letter`: Exposes CRUD operations for the **Letter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Letters
    * const letters = await prisma.letter.findMany()
    * ```
    */
  get letter(): Prisma.LetterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TemporaryUser: 'TemporaryUser',
    Mood: 'Mood',
    Letter: 'Letter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "temporaryUser" | "mood" | "letter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TemporaryUser: {
        payload: Prisma.$TemporaryUserPayload<ExtArgs>
        fields: Prisma.TemporaryUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemporaryUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemporaryUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>
          }
          findFirst: {
            args: Prisma.TemporaryUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemporaryUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>
          }
          findMany: {
            args: Prisma.TemporaryUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>[]
          }
          create: {
            args: Prisma.TemporaryUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>
          }
          createMany: {
            args: Prisma.TemporaryUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemporaryUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>
          }
          update: {
            args: Prisma.TemporaryUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>
          }
          deleteMany: {
            args: Prisma.TemporaryUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemporaryUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemporaryUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryUserPayload>
          }
          aggregate: {
            args: Prisma.TemporaryUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemporaryUser>
          }
          groupBy: {
            args: Prisma.TemporaryUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemporaryUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemporaryUserCountArgs<ExtArgs>
            result: $Utils.Optional<TemporaryUserCountAggregateOutputType> | number
          }
        }
      }
      Mood: {
        payload: Prisma.$MoodPayload<ExtArgs>
        fields: Prisma.MoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findFirst: {
            args: Prisma.MoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findMany: {
            args: Prisma.MoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          create: {
            args: Prisma.MoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          createMany: {
            args: Prisma.MoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          update: {
            args: Prisma.MoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          deleteMany: {
            args: Prisma.MoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          aggregate: {
            args: Prisma.MoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMood>
          }
          groupBy: {
            args: Prisma.MoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodCountArgs<ExtArgs>
            result: $Utils.Optional<MoodCountAggregateOutputType> | number
          }
        }
      }
      Letter: {
        payload: Prisma.$LetterPayload<ExtArgs>
        fields: Prisma.LetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          findFirst: {
            args: Prisma.LetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          findMany: {
            args: Prisma.LetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>[]
          }
          create: {
            args: Prisma.LetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          createMany: {
            args: Prisma.LetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          update: {
            args: Prisma.LetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          deleteMany: {
            args: Prisma.LetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          aggregate: {
            args: Prisma.LetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLetter>
          }
          groupBy: {
            args: Prisma.LetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<LetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.LetterCountArgs<ExtArgs>
            result: $Utils.Optional<LetterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    temporaryUser?: TemporaryUserOmit
    mood?: MoodOmit
    letter?: LetterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TemporaryUserCountOutputType
   */

  export type TemporaryUserCountOutputType = {
    letters: number
  }

  export type TemporaryUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    letters?: boolean | TemporaryUserCountOutputTypeCountLettersArgs
  }

  // Custom InputTypes
  /**
   * TemporaryUserCountOutputType without action
   */
  export type TemporaryUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUserCountOutputType
     */
    select?: TemporaryUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemporaryUserCountOutputType without action
   */
  export type TemporaryUserCountOutputTypeCountLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LetterWhereInput
  }


  /**
   * Count Type MoodCountOutputType
   */

  export type MoodCountOutputType = {
    letters: number
  }

  export type MoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    letters?: boolean | MoodCountOutputTypeCountLettersArgs
  }

  // Custom InputTypes
  /**
   * MoodCountOutputType without action
   */
  export type MoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCountOutputType
     */
    select?: MoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoodCountOutputType without action
   */
  export type MoodCountOutputTypeCountLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LetterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model TemporaryUser
   */

  export type AggregateTemporaryUser = {
    _count: TemporaryUserCountAggregateOutputType | null
    _avg: TemporaryUserAvgAggregateOutputType | null
    _sum: TemporaryUserSumAggregateOutputType | null
    _min: TemporaryUserMinAggregateOutputType | null
    _max: TemporaryUserMaxAggregateOutputType | null
  }

  export type TemporaryUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TemporaryUserSumAggregateOutputType = {
    id: number | null
  }

  export type TemporaryUserMinAggregateOutputType = {
    id: number | null
    username: string | null
  }

  export type TemporaryUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
  }

  export type TemporaryUserCountAggregateOutputType = {
    id: number
    username: number
    _all: number
  }


  export type TemporaryUserAvgAggregateInputType = {
    id?: true
  }

  export type TemporaryUserSumAggregateInputType = {
    id?: true
  }

  export type TemporaryUserMinAggregateInputType = {
    id?: true
    username?: true
  }

  export type TemporaryUserMaxAggregateInputType = {
    id?: true
    username?: true
  }

  export type TemporaryUserCountAggregateInputType = {
    id?: true
    username?: true
    _all?: true
  }

  export type TemporaryUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryUser to aggregate.
     */
    where?: TemporaryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryUsers to fetch.
     */
    orderBy?: TemporaryUserOrderByWithRelationInput | TemporaryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemporaryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemporaryUsers
    **/
    _count?: true | TemporaryUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemporaryUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemporaryUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemporaryUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemporaryUserMaxAggregateInputType
  }

  export type GetTemporaryUserAggregateType<T extends TemporaryUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTemporaryUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemporaryUser[P]>
      : GetScalarType<T[P], AggregateTemporaryUser[P]>
  }




  export type TemporaryUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryUserWhereInput
    orderBy?: TemporaryUserOrderByWithAggregationInput | TemporaryUserOrderByWithAggregationInput[]
    by: TemporaryUserScalarFieldEnum[] | TemporaryUserScalarFieldEnum
    having?: TemporaryUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemporaryUserCountAggregateInputType | true
    _avg?: TemporaryUserAvgAggregateInputType
    _sum?: TemporaryUserSumAggregateInputType
    _min?: TemporaryUserMinAggregateInputType
    _max?: TemporaryUserMaxAggregateInputType
  }

  export type TemporaryUserGroupByOutputType = {
    id: number
    username: string
    _count: TemporaryUserCountAggregateOutputType | null
    _avg: TemporaryUserAvgAggregateOutputType | null
    _sum: TemporaryUserSumAggregateOutputType | null
    _min: TemporaryUserMinAggregateOutputType | null
    _max: TemporaryUserMaxAggregateOutputType | null
  }

  type GetTemporaryUserGroupByPayload<T extends TemporaryUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemporaryUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemporaryUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemporaryUserGroupByOutputType[P]>
            : GetScalarType<T[P], TemporaryUserGroupByOutputType[P]>
        }
      >
    >


  export type TemporaryUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    letters?: boolean | TemporaryUser$lettersArgs<ExtArgs>
    _count?: boolean | TemporaryUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryUser"]>



  export type TemporaryUserSelectScalar = {
    id?: boolean
    username?: boolean
  }

  export type TemporaryUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username", ExtArgs["result"]["temporaryUser"]>
  export type TemporaryUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    letters?: boolean | TemporaryUser$lettersArgs<ExtArgs>
    _count?: boolean | TemporaryUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TemporaryUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemporaryUser"
    objects: {
      letters: Prisma.$LetterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
    }, ExtArgs["result"]["temporaryUser"]>
    composites: {}
  }

  type TemporaryUserGetPayload<S extends boolean | null | undefined | TemporaryUserDefaultArgs> = $Result.GetResult<Prisma.$TemporaryUserPayload, S>

  type TemporaryUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemporaryUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemporaryUserCountAggregateInputType | true
    }

  export interface TemporaryUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemporaryUser'], meta: { name: 'TemporaryUser' } }
    /**
     * Find zero or one TemporaryUser that matches the filter.
     * @param {TemporaryUserFindUniqueArgs} args - Arguments to find a TemporaryUser
     * @example
     * // Get one TemporaryUser
     * const temporaryUser = await prisma.temporaryUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemporaryUserFindUniqueArgs>(args: SelectSubset<T, TemporaryUserFindUniqueArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemporaryUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemporaryUserFindUniqueOrThrowArgs} args - Arguments to find a TemporaryUser
     * @example
     * // Get one TemporaryUser
     * const temporaryUser = await prisma.temporaryUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemporaryUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TemporaryUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserFindFirstArgs} args - Arguments to find a TemporaryUser
     * @example
     * // Get one TemporaryUser
     * const temporaryUser = await prisma.temporaryUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemporaryUserFindFirstArgs>(args?: SelectSubset<T, TemporaryUserFindFirstArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserFindFirstOrThrowArgs} args - Arguments to find a TemporaryUser
     * @example
     * // Get one TemporaryUser
     * const temporaryUser = await prisma.temporaryUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemporaryUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TemporaryUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemporaryUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemporaryUsers
     * const temporaryUsers = await prisma.temporaryUser.findMany()
     * 
     * // Get first 10 TemporaryUsers
     * const temporaryUsers = await prisma.temporaryUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temporaryUserWithIdOnly = await prisma.temporaryUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemporaryUserFindManyArgs>(args?: SelectSubset<T, TemporaryUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemporaryUser.
     * @param {TemporaryUserCreateArgs} args - Arguments to create a TemporaryUser.
     * @example
     * // Create one TemporaryUser
     * const TemporaryUser = await prisma.temporaryUser.create({
     *   data: {
     *     // ... data to create a TemporaryUser
     *   }
     * })
     * 
     */
    create<T extends TemporaryUserCreateArgs>(args: SelectSubset<T, TemporaryUserCreateArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemporaryUsers.
     * @param {TemporaryUserCreateManyArgs} args - Arguments to create many TemporaryUsers.
     * @example
     * // Create many TemporaryUsers
     * const temporaryUser = await prisma.temporaryUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemporaryUserCreateManyArgs>(args?: SelectSubset<T, TemporaryUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TemporaryUser.
     * @param {TemporaryUserDeleteArgs} args - Arguments to delete one TemporaryUser.
     * @example
     * // Delete one TemporaryUser
     * const TemporaryUser = await prisma.temporaryUser.delete({
     *   where: {
     *     // ... filter to delete one TemporaryUser
     *   }
     * })
     * 
     */
    delete<T extends TemporaryUserDeleteArgs>(args: SelectSubset<T, TemporaryUserDeleteArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemporaryUser.
     * @param {TemporaryUserUpdateArgs} args - Arguments to update one TemporaryUser.
     * @example
     * // Update one TemporaryUser
     * const temporaryUser = await prisma.temporaryUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemporaryUserUpdateArgs>(args: SelectSubset<T, TemporaryUserUpdateArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemporaryUsers.
     * @param {TemporaryUserDeleteManyArgs} args - Arguments to filter TemporaryUsers to delete.
     * @example
     * // Delete a few TemporaryUsers
     * const { count } = await prisma.temporaryUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemporaryUserDeleteManyArgs>(args?: SelectSubset<T, TemporaryUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemporaryUsers
     * const temporaryUser = await prisma.temporaryUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemporaryUserUpdateManyArgs>(args: SelectSubset<T, TemporaryUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemporaryUser.
     * @param {TemporaryUserUpsertArgs} args - Arguments to update or create a TemporaryUser.
     * @example
     * // Update or create a TemporaryUser
     * const temporaryUser = await prisma.temporaryUser.upsert({
     *   create: {
     *     // ... data to create a TemporaryUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemporaryUser we want to update
     *   }
     * })
     */
    upsert<T extends TemporaryUserUpsertArgs>(args: SelectSubset<T, TemporaryUserUpsertArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemporaryUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserCountArgs} args - Arguments to filter TemporaryUsers to count.
     * @example
     * // Count the number of TemporaryUsers
     * const count = await prisma.temporaryUser.count({
     *   where: {
     *     // ... the filter for the TemporaryUsers we want to count
     *   }
     * })
    **/
    count<T extends TemporaryUserCountArgs>(
      args?: Subset<T, TemporaryUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemporaryUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemporaryUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemporaryUserAggregateArgs>(args: Subset<T, TemporaryUserAggregateArgs>): Prisma.PrismaPromise<GetTemporaryUserAggregateType<T>>

    /**
     * Group by TemporaryUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemporaryUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemporaryUserGroupByArgs['orderBy'] }
        : { orderBy?: TemporaryUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemporaryUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemporaryUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemporaryUser model
   */
  readonly fields: TemporaryUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemporaryUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemporaryUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    letters<T extends TemporaryUser$lettersArgs<ExtArgs> = {}>(args?: Subset<T, TemporaryUser$lettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemporaryUser model
   */
  interface TemporaryUserFieldRefs {
    readonly id: FieldRef<"TemporaryUser", 'Int'>
    readonly username: FieldRef<"TemporaryUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TemporaryUser findUnique
   */
  export type TemporaryUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryUser to fetch.
     */
    where: TemporaryUserWhereUniqueInput
  }

  /**
   * TemporaryUser findUniqueOrThrow
   */
  export type TemporaryUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryUser to fetch.
     */
    where: TemporaryUserWhereUniqueInput
  }

  /**
   * TemporaryUser findFirst
   */
  export type TemporaryUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryUser to fetch.
     */
    where?: TemporaryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryUsers to fetch.
     */
    orderBy?: TemporaryUserOrderByWithRelationInput | TemporaryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryUsers.
     */
    cursor?: TemporaryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryUsers.
     */
    distinct?: TemporaryUserScalarFieldEnum | TemporaryUserScalarFieldEnum[]
  }

  /**
   * TemporaryUser findFirstOrThrow
   */
  export type TemporaryUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryUser to fetch.
     */
    where?: TemporaryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryUsers to fetch.
     */
    orderBy?: TemporaryUserOrderByWithRelationInput | TemporaryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryUsers.
     */
    cursor?: TemporaryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryUsers.
     */
    distinct?: TemporaryUserScalarFieldEnum | TemporaryUserScalarFieldEnum[]
  }

  /**
   * TemporaryUser findMany
   */
  export type TemporaryUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryUsers to fetch.
     */
    where?: TemporaryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryUsers to fetch.
     */
    orderBy?: TemporaryUserOrderByWithRelationInput | TemporaryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemporaryUsers.
     */
    cursor?: TemporaryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryUsers.
     */
    skip?: number
    distinct?: TemporaryUserScalarFieldEnum | TemporaryUserScalarFieldEnum[]
  }

  /**
   * TemporaryUser create
   */
  export type TemporaryUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TemporaryUser.
     */
    data: XOR<TemporaryUserCreateInput, TemporaryUserUncheckedCreateInput>
  }

  /**
   * TemporaryUser createMany
   */
  export type TemporaryUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemporaryUsers.
     */
    data: TemporaryUserCreateManyInput | TemporaryUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemporaryUser update
   */
  export type TemporaryUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TemporaryUser.
     */
    data: XOR<TemporaryUserUpdateInput, TemporaryUserUncheckedUpdateInput>
    /**
     * Choose, which TemporaryUser to update.
     */
    where: TemporaryUserWhereUniqueInput
  }

  /**
   * TemporaryUser updateMany
   */
  export type TemporaryUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemporaryUsers.
     */
    data: XOR<TemporaryUserUpdateManyMutationInput, TemporaryUserUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryUsers to update
     */
    where?: TemporaryUserWhereInput
    /**
     * Limit how many TemporaryUsers to update.
     */
    limit?: number
  }

  /**
   * TemporaryUser upsert
   */
  export type TemporaryUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TemporaryUser to update in case it exists.
     */
    where: TemporaryUserWhereUniqueInput
    /**
     * In case the TemporaryUser found by the `where` argument doesn't exist, create a new TemporaryUser with this data.
     */
    create: XOR<TemporaryUserCreateInput, TemporaryUserUncheckedCreateInput>
    /**
     * In case the TemporaryUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemporaryUserUpdateInput, TemporaryUserUncheckedUpdateInput>
  }

  /**
   * TemporaryUser delete
   */
  export type TemporaryUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
    /**
     * Filter which TemporaryUser to delete.
     */
    where: TemporaryUserWhereUniqueInput
  }

  /**
   * TemporaryUser deleteMany
   */
  export type TemporaryUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryUsers to delete
     */
    where?: TemporaryUserWhereInput
    /**
     * Limit how many TemporaryUsers to delete.
     */
    limit?: number
  }

  /**
   * TemporaryUser.letters
   */
  export type TemporaryUser$lettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    where?: LetterWhereInput
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    cursor?: LetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }

  /**
   * TemporaryUser without action
   */
  export type TemporaryUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryUser
     */
    select?: TemporaryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryUser
     */
    omit?: TemporaryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryUserInclude<ExtArgs> | null
  }


  /**
   * Model Mood
   */

  export type AggregateMood = {
    _count: MoodCountAggregateOutputType | null
    _avg: MoodAvgAggregateOutputType | null
    _sum: MoodSumAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  export type MoodAvgAggregateOutputType = {
    id: number | null
  }

  export type MoodSumAggregateOutputType = {
    id: number | null
  }

  export type MoodMinAggregateOutputType = {
    id: number | null
    color: string | null
    mood: string | null
  }

  export type MoodMaxAggregateOutputType = {
    id: number | null
    color: string | null
    mood: string | null
  }

  export type MoodCountAggregateOutputType = {
    id: number
    color: number
    mood: number
    _all: number
  }


  export type MoodAvgAggregateInputType = {
    id?: true
  }

  export type MoodSumAggregateInputType = {
    id?: true
  }

  export type MoodMinAggregateInputType = {
    id?: true
    color?: true
    mood?: true
  }

  export type MoodMaxAggregateInputType = {
    id?: true
    color?: true
    mood?: true
  }

  export type MoodCountAggregateInputType = {
    id?: true
    color?: true
    mood?: true
    _all?: true
  }

  export type MoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mood to aggregate.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moods
    **/
    _count?: true | MoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodMaxAggregateInputType
  }

  export type GetMoodAggregateType<T extends MoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMood[P]>
      : GetScalarType<T[P], AggregateMood[P]>
  }




  export type MoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithAggregationInput | MoodOrderByWithAggregationInput[]
    by: MoodScalarFieldEnum[] | MoodScalarFieldEnum
    having?: MoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodCountAggregateInputType | true
    _avg?: MoodAvgAggregateInputType
    _sum?: MoodSumAggregateInputType
    _min?: MoodMinAggregateInputType
    _max?: MoodMaxAggregateInputType
  }

  export type MoodGroupByOutputType = {
    id: number
    color: string
    mood: string
    _count: MoodCountAggregateOutputType | null
    _avg: MoodAvgAggregateOutputType | null
    _sum: MoodSumAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  type GetMoodGroupByPayload<T extends MoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodGroupByOutputType[P]>
            : GetScalarType<T[P], MoodGroupByOutputType[P]>
        }
      >
    >


  export type MoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    mood?: boolean
    letters?: boolean | Mood$lettersArgs<ExtArgs>
    _count?: boolean | MoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>



  export type MoodSelectScalar = {
    id?: boolean
    color?: boolean
    mood?: boolean
  }

  export type MoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color" | "mood", ExtArgs["result"]["mood"]>
  export type MoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    letters?: boolean | Mood$lettersArgs<ExtArgs>
    _count?: boolean | MoodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mood"
    objects: {
      letters: Prisma.$LetterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      color: string
      mood: string
    }, ExtArgs["result"]["mood"]>
    composites: {}
  }

  type MoodGetPayload<S extends boolean | null | undefined | MoodDefaultArgs> = $Result.GetResult<Prisma.$MoodPayload, S>

  type MoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodCountAggregateInputType | true
    }

  export interface MoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mood'], meta: { name: 'Mood' } }
    /**
     * Find zero or one Mood that matches the filter.
     * @param {MoodFindUniqueArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodFindUniqueArgs>(args: SelectSubset<T, MoodFindUniqueArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodFindUniqueOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodFindFirstArgs>(args?: SelectSubset<T, MoodFindFirstArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moods
     * const moods = await prisma.mood.findMany()
     * 
     * // Get first 10 Moods
     * const moods = await prisma.mood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodWithIdOnly = await prisma.mood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodFindManyArgs>(args?: SelectSubset<T, MoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mood.
     * @param {MoodCreateArgs} args - Arguments to create a Mood.
     * @example
     * // Create one Mood
     * const Mood = await prisma.mood.create({
     *   data: {
     *     // ... data to create a Mood
     *   }
     * })
     * 
     */
    create<T extends MoodCreateArgs>(args: SelectSubset<T, MoodCreateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moods.
     * @param {MoodCreateManyArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodCreateManyArgs>(args?: SelectSubset<T, MoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mood.
     * @param {MoodDeleteArgs} args - Arguments to delete one Mood.
     * @example
     * // Delete one Mood
     * const Mood = await prisma.mood.delete({
     *   where: {
     *     // ... filter to delete one Mood
     *   }
     * })
     * 
     */
    delete<T extends MoodDeleteArgs>(args: SelectSubset<T, MoodDeleteArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mood.
     * @param {MoodUpdateArgs} args - Arguments to update one Mood.
     * @example
     * // Update one Mood
     * const mood = await prisma.mood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodUpdateArgs>(args: SelectSubset<T, MoodUpdateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moods.
     * @param {MoodDeleteManyArgs} args - Arguments to filter Moods to delete.
     * @example
     * // Delete a few Moods
     * const { count } = await prisma.mood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodDeleteManyArgs>(args?: SelectSubset<T, MoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodUpdateManyArgs>(args: SelectSubset<T, MoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mood.
     * @param {MoodUpsertArgs} args - Arguments to update or create a Mood.
     * @example
     * // Update or create a Mood
     * const mood = await prisma.mood.upsert({
     *   create: {
     *     // ... data to create a Mood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mood we want to update
     *   }
     * })
     */
    upsert<T extends MoodUpsertArgs>(args: SelectSubset<T, MoodUpsertArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCountArgs} args - Arguments to filter Moods to count.
     * @example
     * // Count the number of Moods
     * const count = await prisma.mood.count({
     *   where: {
     *     // ... the filter for the Moods we want to count
     *   }
     * })
    **/
    count<T extends MoodCountArgs>(
      args?: Subset<T, MoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodAggregateArgs>(args: Subset<T, MoodAggregateArgs>): Prisma.PrismaPromise<GetMoodAggregateType<T>>

    /**
     * Group by Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodGroupByArgs['orderBy'] }
        : { orderBy?: MoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mood model
   */
  readonly fields: MoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    letters<T extends Mood$lettersArgs<ExtArgs> = {}>(args?: Subset<T, Mood$lettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mood model
   */
  interface MoodFieldRefs {
    readonly id: FieldRef<"Mood", 'Int'>
    readonly color: FieldRef<"Mood", 'String'>
    readonly mood: FieldRef<"Mood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mood findUnique
   */
  export type MoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findUniqueOrThrow
   */
  export type MoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findFirst
   */
  export type MoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findFirstOrThrow
   */
  export type MoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findMany
   */
  export type MoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Moods to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood create
   */
  export type MoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Mood.
     */
    data: XOR<MoodCreateInput, MoodUncheckedCreateInput>
  }

  /**
   * Mood createMany
   */
  export type MoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mood update
   */
  export type MoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Mood.
     */
    data: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
    /**
     * Choose, which Mood to update.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood updateMany
   */
  export type MoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
  }

  /**
   * Mood upsert
   */
  export type MoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Mood to update in case it exists.
     */
    where: MoodWhereUniqueInput
    /**
     * In case the Mood found by the `where` argument doesn't exist, create a new Mood with this data.
     */
    create: XOR<MoodCreateInput, MoodUncheckedCreateInput>
    /**
     * In case the Mood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
  }

  /**
   * Mood delete
   */
  export type MoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter which Mood to delete.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood deleteMany
   */
  export type MoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moods to delete
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to delete.
     */
    limit?: number
  }

  /**
   * Mood.letters
   */
  export type Mood$lettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    where?: LetterWhereInput
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    cursor?: LetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }

  /**
   * Mood without action
   */
  export type MoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
  }


  /**
   * Model Letter
   */

  export type AggregateLetter = {
    _count: LetterCountAggregateOutputType | null
    _avg: LetterAvgAggregateOutputType | null
    _sum: LetterSumAggregateOutputType | null
    _min: LetterMinAggregateOutputType | null
    _max: LetterMaxAggregateOutputType | null
  }

  export type LetterAvgAggregateOutputType = {
    moodId: number | null
    temporaryUserId: number | null
  }

  export type LetterSumAggregateOutputType = {
    moodId: number | null
    temporaryUserId: number | null
  }

  export type LetterMinAggregateOutputType = {
    id: string | null
    recipient: string | null
    message: string | null
    moodId: number | null
    temporaryUserId: number | null
    createdAt: Date | null
  }

  export type LetterMaxAggregateOutputType = {
    id: string | null
    recipient: string | null
    message: string | null
    moodId: number | null
    temporaryUserId: number | null
    createdAt: Date | null
  }

  export type LetterCountAggregateOutputType = {
    id: number
    recipient: number
    message: number
    moodId: number
    temporaryUserId: number
    createdAt: number
    _all: number
  }


  export type LetterAvgAggregateInputType = {
    moodId?: true
    temporaryUserId?: true
  }

  export type LetterSumAggregateInputType = {
    moodId?: true
    temporaryUserId?: true
  }

  export type LetterMinAggregateInputType = {
    id?: true
    recipient?: true
    message?: true
    moodId?: true
    temporaryUserId?: true
    createdAt?: true
  }

  export type LetterMaxAggregateInputType = {
    id?: true
    recipient?: true
    message?: true
    moodId?: true
    temporaryUserId?: true
    createdAt?: true
  }

  export type LetterCountAggregateInputType = {
    id?: true
    recipient?: true
    message?: true
    moodId?: true
    temporaryUserId?: true
    createdAt?: true
    _all?: true
  }

  export type LetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Letter to aggregate.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Letters
    **/
    _count?: true | LetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LetterMaxAggregateInputType
  }

  export type GetLetterAggregateType<T extends LetterAggregateArgs> = {
        [P in keyof T & keyof AggregateLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLetter[P]>
      : GetScalarType<T[P], AggregateLetter[P]>
  }




  export type LetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LetterWhereInput
    orderBy?: LetterOrderByWithAggregationInput | LetterOrderByWithAggregationInput[]
    by: LetterScalarFieldEnum[] | LetterScalarFieldEnum
    having?: LetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LetterCountAggregateInputType | true
    _avg?: LetterAvgAggregateInputType
    _sum?: LetterSumAggregateInputType
    _min?: LetterMinAggregateInputType
    _max?: LetterMaxAggregateInputType
  }

  export type LetterGroupByOutputType = {
    id: string
    recipient: string
    message: string
    moodId: number
    temporaryUserId: number
    createdAt: Date
    _count: LetterCountAggregateOutputType | null
    _avg: LetterAvgAggregateOutputType | null
    _sum: LetterSumAggregateOutputType | null
    _min: LetterMinAggregateOutputType | null
    _max: LetterMaxAggregateOutputType | null
  }

  type GetLetterGroupByPayload<T extends LetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LetterGroupByOutputType[P]>
            : GetScalarType<T[P], LetterGroupByOutputType[P]>
        }
      >
    >


  export type LetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient?: boolean
    message?: boolean
    moodId?: boolean
    temporaryUserId?: boolean
    createdAt?: boolean
    mood?: boolean | MoodDefaultArgs<ExtArgs>
    temporaryUser?: boolean | TemporaryUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["letter"]>



  export type LetterSelectScalar = {
    id?: boolean
    recipient?: boolean
    message?: boolean
    moodId?: boolean
    temporaryUserId?: boolean
    createdAt?: boolean
  }

  export type LetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipient" | "message" | "moodId" | "temporaryUserId" | "createdAt", ExtArgs["result"]["letter"]>
  export type LetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mood?: boolean | MoodDefaultArgs<ExtArgs>
    temporaryUser?: boolean | TemporaryUserDefaultArgs<ExtArgs>
  }

  export type $LetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Letter"
    objects: {
      mood: Prisma.$MoodPayload<ExtArgs>
      temporaryUser: Prisma.$TemporaryUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipient: string
      message: string
      moodId: number
      temporaryUserId: number
      createdAt: Date
    }, ExtArgs["result"]["letter"]>
    composites: {}
  }

  type LetterGetPayload<S extends boolean | null | undefined | LetterDefaultArgs> = $Result.GetResult<Prisma.$LetterPayload, S>

  type LetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LetterCountAggregateInputType | true
    }

  export interface LetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Letter'], meta: { name: 'Letter' } }
    /**
     * Find zero or one Letter that matches the filter.
     * @param {LetterFindUniqueArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LetterFindUniqueArgs>(args: SelectSubset<T, LetterFindUniqueArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Letter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LetterFindUniqueOrThrowArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LetterFindUniqueOrThrowArgs>(args: SelectSubset<T, LetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Letter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindFirstArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LetterFindFirstArgs>(args?: SelectSubset<T, LetterFindFirstArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Letter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindFirstOrThrowArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LetterFindFirstOrThrowArgs>(args?: SelectSubset<T, LetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Letters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Letters
     * const letters = await prisma.letter.findMany()
     * 
     * // Get first 10 Letters
     * const letters = await prisma.letter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const letterWithIdOnly = await prisma.letter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LetterFindManyArgs>(args?: SelectSubset<T, LetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Letter.
     * @param {LetterCreateArgs} args - Arguments to create a Letter.
     * @example
     * // Create one Letter
     * const Letter = await prisma.letter.create({
     *   data: {
     *     // ... data to create a Letter
     *   }
     * })
     * 
     */
    create<T extends LetterCreateArgs>(args: SelectSubset<T, LetterCreateArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Letters.
     * @param {LetterCreateManyArgs} args - Arguments to create many Letters.
     * @example
     * // Create many Letters
     * const letter = await prisma.letter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LetterCreateManyArgs>(args?: SelectSubset<T, LetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Letter.
     * @param {LetterDeleteArgs} args - Arguments to delete one Letter.
     * @example
     * // Delete one Letter
     * const Letter = await prisma.letter.delete({
     *   where: {
     *     // ... filter to delete one Letter
     *   }
     * })
     * 
     */
    delete<T extends LetterDeleteArgs>(args: SelectSubset<T, LetterDeleteArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Letter.
     * @param {LetterUpdateArgs} args - Arguments to update one Letter.
     * @example
     * // Update one Letter
     * const letter = await prisma.letter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LetterUpdateArgs>(args: SelectSubset<T, LetterUpdateArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Letters.
     * @param {LetterDeleteManyArgs} args - Arguments to filter Letters to delete.
     * @example
     * // Delete a few Letters
     * const { count } = await prisma.letter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LetterDeleteManyArgs>(args?: SelectSubset<T, LetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Letters
     * const letter = await prisma.letter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LetterUpdateManyArgs>(args: SelectSubset<T, LetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Letter.
     * @param {LetterUpsertArgs} args - Arguments to update or create a Letter.
     * @example
     * // Update or create a Letter
     * const letter = await prisma.letter.upsert({
     *   create: {
     *     // ... data to create a Letter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Letter we want to update
     *   }
     * })
     */
    upsert<T extends LetterUpsertArgs>(args: SelectSubset<T, LetterUpsertArgs<ExtArgs>>): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterCountArgs} args - Arguments to filter Letters to count.
     * @example
     * // Count the number of Letters
     * const count = await prisma.letter.count({
     *   where: {
     *     // ... the filter for the Letters we want to count
     *   }
     * })
    **/
    count<T extends LetterCountArgs>(
      args?: Subset<T, LetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Letter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LetterAggregateArgs>(args: Subset<T, LetterAggregateArgs>): Prisma.PrismaPromise<GetLetterAggregateType<T>>

    /**
     * Group by Letter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LetterGroupByArgs['orderBy'] }
        : { orderBy?: LetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Letter model
   */
  readonly fields: LetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Letter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mood<T extends MoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoodDefaultArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    temporaryUser<T extends TemporaryUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemporaryUserDefaultArgs<ExtArgs>>): Prisma__TemporaryUserClient<$Result.GetResult<Prisma.$TemporaryUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Letter model
   */
  interface LetterFieldRefs {
    readonly id: FieldRef<"Letter", 'String'>
    readonly recipient: FieldRef<"Letter", 'String'>
    readonly message: FieldRef<"Letter", 'String'>
    readonly moodId: FieldRef<"Letter", 'Int'>
    readonly temporaryUserId: FieldRef<"Letter", 'Int'>
    readonly createdAt: FieldRef<"Letter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Letter findUnique
   */
  export type LetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where: LetterWhereUniqueInput
  }

  /**
   * Letter findUniqueOrThrow
   */
  export type LetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where: LetterWhereUniqueInput
  }

  /**
   * Letter findFirst
   */
  export type LetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Letters.
     */
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }

  /**
   * Letter findFirstOrThrow
   */
  export type LetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Letters.
     */
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }

  /**
   * Letter findMany
   */
  export type LetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letters to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }

  /**
   * Letter create
   */
  export type LetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * The data needed to create a Letter.
     */
    data: XOR<LetterCreateInput, LetterUncheckedCreateInput>
  }

  /**
   * Letter createMany
   */
  export type LetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Letters.
     */
    data: LetterCreateManyInput | LetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Letter update
   */
  export type LetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * The data needed to update a Letter.
     */
    data: XOR<LetterUpdateInput, LetterUncheckedUpdateInput>
    /**
     * Choose, which Letter to update.
     */
    where: LetterWhereUniqueInput
  }

  /**
   * Letter updateMany
   */
  export type LetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Letters.
     */
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyInput>
    /**
     * Filter which Letters to update
     */
    where?: LetterWhereInput
    /**
     * Limit how many Letters to update.
     */
    limit?: number
  }

  /**
   * Letter upsert
   */
  export type LetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * The filter to search for the Letter to update in case it exists.
     */
    where: LetterWhereUniqueInput
    /**
     * In case the Letter found by the `where` argument doesn't exist, create a new Letter with this data.
     */
    create: XOR<LetterCreateInput, LetterUncheckedCreateInput>
    /**
     * In case the Letter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LetterUpdateInput, LetterUncheckedUpdateInput>
  }

  /**
   * Letter delete
   */
  export type LetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter which Letter to delete.
     */
    where: LetterWhereUniqueInput
  }

  /**
   * Letter deleteMany
   */
  export type LetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Letters to delete
     */
    where?: LetterWhereInput
    /**
     * Limit how many Letters to delete.
     */
    limit?: number
  }

  /**
   * Letter without action
   */
  export type LetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Letter
     */
    omit?: LetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LetterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TemporaryUserScalarFieldEnum: {
    id: 'id',
    username: 'username'
  };

  export type TemporaryUserScalarFieldEnum = (typeof TemporaryUserScalarFieldEnum)[keyof typeof TemporaryUserScalarFieldEnum]


  export const MoodScalarFieldEnum: {
    id: 'id',
    color: 'color',
    mood: 'mood'
  };

  export type MoodScalarFieldEnum = (typeof MoodScalarFieldEnum)[keyof typeof MoodScalarFieldEnum]


  export const LetterScalarFieldEnum: {
    id: 'id',
    recipient: 'recipient',
    message: 'message',
    moodId: 'moodId',
    temporaryUserId: 'temporaryUserId',
    createdAt: 'createdAt'
  };

  export type LetterScalarFieldEnum = (typeof LetterScalarFieldEnum)[keyof typeof LetterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TemporaryUserOrderByRelevanceFieldEnum: {
    username: 'username'
  };

  export type TemporaryUserOrderByRelevanceFieldEnum = (typeof TemporaryUserOrderByRelevanceFieldEnum)[keyof typeof TemporaryUserOrderByRelevanceFieldEnum]


  export const MoodOrderByRelevanceFieldEnum: {
    color: 'color',
    mood: 'mood'
  };

  export type MoodOrderByRelevanceFieldEnum = (typeof MoodOrderByRelevanceFieldEnum)[keyof typeof MoodOrderByRelevanceFieldEnum]


  export const LetterOrderByRelevanceFieldEnum: {
    id: 'id',
    recipient: 'recipient',
    message: 'message'
  };

  export type LetterOrderByRelevanceFieldEnum = (typeof LetterOrderByRelevanceFieldEnum)[keyof typeof LetterOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TemporaryUserWhereInput = {
    AND?: TemporaryUserWhereInput | TemporaryUserWhereInput[]
    OR?: TemporaryUserWhereInput[]
    NOT?: TemporaryUserWhereInput | TemporaryUserWhereInput[]
    id?: IntFilter<"TemporaryUser"> | number
    username?: StringFilter<"TemporaryUser"> | string
    letters?: LetterListRelationFilter
  }

  export type TemporaryUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    letters?: LetterOrderByRelationAggregateInput
    _relevance?: TemporaryUserOrderByRelevanceInput
  }

  export type TemporaryUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: TemporaryUserWhereInput | TemporaryUserWhereInput[]
    OR?: TemporaryUserWhereInput[]
    NOT?: TemporaryUserWhereInput | TemporaryUserWhereInput[]
    letters?: LetterListRelationFilter
  }, "id" | "username">

  export type TemporaryUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    _count?: TemporaryUserCountOrderByAggregateInput
    _avg?: TemporaryUserAvgOrderByAggregateInput
    _max?: TemporaryUserMaxOrderByAggregateInput
    _min?: TemporaryUserMinOrderByAggregateInput
    _sum?: TemporaryUserSumOrderByAggregateInput
  }

  export type TemporaryUserScalarWhereWithAggregatesInput = {
    AND?: TemporaryUserScalarWhereWithAggregatesInput | TemporaryUserScalarWhereWithAggregatesInput[]
    OR?: TemporaryUserScalarWhereWithAggregatesInput[]
    NOT?: TemporaryUserScalarWhereWithAggregatesInput | TemporaryUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemporaryUser"> | number
    username?: StringWithAggregatesFilter<"TemporaryUser"> | string
  }

  export type MoodWhereInput = {
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    id?: IntFilter<"Mood"> | number
    color?: StringFilter<"Mood"> | string
    mood?: StringFilter<"Mood"> | string
    letters?: LetterListRelationFilter
  }

  export type MoodOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    mood?: SortOrder
    letters?: LetterOrderByRelationAggregateInput
    _relevance?: MoodOrderByRelevanceInput
  }

  export type MoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    color?: StringFilter<"Mood"> | string
    mood?: StringFilter<"Mood"> | string
    letters?: LetterListRelationFilter
  }, "id">

  export type MoodOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    mood?: SortOrder
    _count?: MoodCountOrderByAggregateInput
    _avg?: MoodAvgOrderByAggregateInput
    _max?: MoodMaxOrderByAggregateInput
    _min?: MoodMinOrderByAggregateInput
    _sum?: MoodSumOrderByAggregateInput
  }

  export type MoodScalarWhereWithAggregatesInput = {
    AND?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    OR?: MoodScalarWhereWithAggregatesInput[]
    NOT?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mood"> | number
    color?: StringWithAggregatesFilter<"Mood"> | string
    mood?: StringWithAggregatesFilter<"Mood"> | string
  }

  export type LetterWhereInput = {
    AND?: LetterWhereInput | LetterWhereInput[]
    OR?: LetterWhereInput[]
    NOT?: LetterWhereInput | LetterWhereInput[]
    id?: StringFilter<"Letter"> | string
    recipient?: StringFilter<"Letter"> | string
    message?: StringFilter<"Letter"> | string
    moodId?: IntFilter<"Letter"> | number
    temporaryUserId?: IntFilter<"Letter"> | number
    createdAt?: DateTimeFilter<"Letter"> | Date | string
    mood?: XOR<MoodScalarRelationFilter, MoodWhereInput>
    temporaryUser?: XOR<TemporaryUserScalarRelationFilter, TemporaryUserWhereInput>
  }

  export type LetterOrderByWithRelationInput = {
    id?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    moodId?: SortOrder
    temporaryUserId?: SortOrder
    createdAt?: SortOrder
    mood?: MoodOrderByWithRelationInput
    temporaryUser?: TemporaryUserOrderByWithRelationInput
    _relevance?: LetterOrderByRelevanceInput
  }

  export type LetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LetterWhereInput | LetterWhereInput[]
    OR?: LetterWhereInput[]
    NOT?: LetterWhereInput | LetterWhereInput[]
    recipient?: StringFilter<"Letter"> | string
    message?: StringFilter<"Letter"> | string
    moodId?: IntFilter<"Letter"> | number
    temporaryUserId?: IntFilter<"Letter"> | number
    createdAt?: DateTimeFilter<"Letter"> | Date | string
    mood?: XOR<MoodScalarRelationFilter, MoodWhereInput>
    temporaryUser?: XOR<TemporaryUserScalarRelationFilter, TemporaryUserWhereInput>
  }, "id">

  export type LetterOrderByWithAggregationInput = {
    id?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    moodId?: SortOrder
    temporaryUserId?: SortOrder
    createdAt?: SortOrder
    _count?: LetterCountOrderByAggregateInput
    _avg?: LetterAvgOrderByAggregateInput
    _max?: LetterMaxOrderByAggregateInput
    _min?: LetterMinOrderByAggregateInput
    _sum?: LetterSumOrderByAggregateInput
  }

  export type LetterScalarWhereWithAggregatesInput = {
    AND?: LetterScalarWhereWithAggregatesInput | LetterScalarWhereWithAggregatesInput[]
    OR?: LetterScalarWhereWithAggregatesInput[]
    NOT?: LetterScalarWhereWithAggregatesInput | LetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Letter"> | string
    recipient?: StringWithAggregatesFilter<"Letter"> | string
    message?: StringWithAggregatesFilter<"Letter"> | string
    moodId?: IntWithAggregatesFilter<"Letter"> | number
    temporaryUserId?: IntWithAggregatesFilter<"Letter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Letter"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TemporaryUserCreateInput = {
    username: string
    letters?: LetterCreateNestedManyWithoutTemporaryUserInput
  }

  export type TemporaryUserUncheckedCreateInput = {
    id?: number
    username: string
    letters?: LetterUncheckedCreateNestedManyWithoutTemporaryUserInput
  }

  export type TemporaryUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    letters?: LetterUpdateManyWithoutTemporaryUserNestedInput
  }

  export type TemporaryUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    letters?: LetterUncheckedUpdateManyWithoutTemporaryUserNestedInput
  }

  export type TemporaryUserCreateManyInput = {
    id?: number
    username: string
  }

  export type TemporaryUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type TemporaryUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
  }

  export type MoodCreateInput = {
    color: string
    mood: string
    letters?: LetterCreateNestedManyWithoutMoodInput
  }

  export type MoodUncheckedCreateInput = {
    id?: number
    color: string
    mood: string
    letters?: LetterUncheckedCreateNestedManyWithoutMoodInput
  }

  export type MoodUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    letters?: LetterUpdateManyWithoutMoodNestedInput
  }

  export type MoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
    letters?: LetterUncheckedUpdateManyWithoutMoodNestedInput
  }

  export type MoodCreateManyInput = {
    id?: number
    color: string
    mood: string
  }

  export type MoodUpdateManyMutationInput = {
    color?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
  }

  export type LetterCreateInput = {
    id: string
    recipient: string
    message: string
    createdAt?: Date | string
    mood: MoodCreateNestedOneWithoutLettersInput
    temporaryUser: TemporaryUserCreateNestedOneWithoutLettersInput
  }

  export type LetterUncheckedCreateInput = {
    id: string
    recipient: string
    message: string
    moodId: number
    temporaryUserId: number
    createdAt?: Date | string
  }

  export type LetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: MoodUpdateOneRequiredWithoutLettersNestedInput
    temporaryUser?: TemporaryUserUpdateOneRequiredWithoutLettersNestedInput
  }

  export type LetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    moodId?: IntFieldUpdateOperationsInput | number
    temporaryUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LetterCreateManyInput = {
    id: string
    recipient: string
    message: string
    moodId: number
    temporaryUserId: number
    createdAt?: Date | string
  }

  export type LetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    moodId?: IntFieldUpdateOperationsInput | number
    temporaryUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type LetterListRelationFilter = {
    every?: LetterWhereInput
    some?: LetterWhereInput
    none?: LetterWhereInput
  }

  export type LetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemporaryUserOrderByRelevanceInput = {
    fields: TemporaryUserOrderByRelevanceFieldEnum | TemporaryUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemporaryUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
  }

  export type TemporaryUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TemporaryUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
  }

  export type TemporaryUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
  }

  export type TemporaryUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoodOrderByRelevanceInput = {
    fields: MoodOrderByRelevanceFieldEnum | MoodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MoodCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    mood?: SortOrder
  }

  export type MoodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoodMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    mood?: SortOrder
  }

  export type MoodMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    mood?: SortOrder
  }

  export type MoodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MoodScalarRelationFilter = {
    is?: MoodWhereInput
    isNot?: MoodWhereInput
  }

  export type TemporaryUserScalarRelationFilter = {
    is?: TemporaryUserWhereInput
    isNot?: TemporaryUserWhereInput
  }

  export type LetterOrderByRelevanceInput = {
    fields: LetterOrderByRelevanceFieldEnum | LetterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LetterCountOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    moodId?: SortOrder
    temporaryUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type LetterAvgOrderByAggregateInput = {
    moodId?: SortOrder
    temporaryUserId?: SortOrder
  }

  export type LetterMaxOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    moodId?: SortOrder
    temporaryUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type LetterMinOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    moodId?: SortOrder
    temporaryUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type LetterSumOrderByAggregateInput = {
    moodId?: SortOrder
    temporaryUserId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LetterCreateNestedManyWithoutTemporaryUserInput = {
    create?: XOR<LetterCreateWithoutTemporaryUserInput, LetterUncheckedCreateWithoutTemporaryUserInput> | LetterCreateWithoutTemporaryUserInput[] | LetterUncheckedCreateWithoutTemporaryUserInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutTemporaryUserInput | LetterCreateOrConnectWithoutTemporaryUserInput[]
    createMany?: LetterCreateManyTemporaryUserInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterUncheckedCreateNestedManyWithoutTemporaryUserInput = {
    create?: XOR<LetterCreateWithoutTemporaryUserInput, LetterUncheckedCreateWithoutTemporaryUserInput> | LetterCreateWithoutTemporaryUserInput[] | LetterUncheckedCreateWithoutTemporaryUserInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutTemporaryUserInput | LetterCreateOrConnectWithoutTemporaryUserInput[]
    createMany?: LetterCreateManyTemporaryUserInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterUpdateManyWithoutTemporaryUserNestedInput = {
    create?: XOR<LetterCreateWithoutTemporaryUserInput, LetterUncheckedCreateWithoutTemporaryUserInput> | LetterCreateWithoutTemporaryUserInput[] | LetterUncheckedCreateWithoutTemporaryUserInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutTemporaryUserInput | LetterCreateOrConnectWithoutTemporaryUserInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutTemporaryUserInput | LetterUpsertWithWhereUniqueWithoutTemporaryUserInput[]
    createMany?: LetterCreateManyTemporaryUserInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutTemporaryUserInput | LetterUpdateWithWhereUniqueWithoutTemporaryUserInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutTemporaryUserInput | LetterUpdateManyWithWhereWithoutTemporaryUserInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type LetterUncheckedUpdateManyWithoutTemporaryUserNestedInput = {
    create?: XOR<LetterCreateWithoutTemporaryUserInput, LetterUncheckedCreateWithoutTemporaryUserInput> | LetterCreateWithoutTemporaryUserInput[] | LetterUncheckedCreateWithoutTemporaryUserInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutTemporaryUserInput | LetterCreateOrConnectWithoutTemporaryUserInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutTemporaryUserInput | LetterUpsertWithWhereUniqueWithoutTemporaryUserInput[]
    createMany?: LetterCreateManyTemporaryUserInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutTemporaryUserInput | LetterUpdateWithWhereUniqueWithoutTemporaryUserInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutTemporaryUserInput | LetterUpdateManyWithWhereWithoutTemporaryUserInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type LetterCreateNestedManyWithoutMoodInput = {
    create?: XOR<LetterCreateWithoutMoodInput, LetterUncheckedCreateWithoutMoodInput> | LetterCreateWithoutMoodInput[] | LetterUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutMoodInput | LetterCreateOrConnectWithoutMoodInput[]
    createMany?: LetterCreateManyMoodInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterUncheckedCreateNestedManyWithoutMoodInput = {
    create?: XOR<LetterCreateWithoutMoodInput, LetterUncheckedCreateWithoutMoodInput> | LetterCreateWithoutMoodInput[] | LetterUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutMoodInput | LetterCreateOrConnectWithoutMoodInput[]
    createMany?: LetterCreateManyMoodInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterUpdateManyWithoutMoodNestedInput = {
    create?: XOR<LetterCreateWithoutMoodInput, LetterUncheckedCreateWithoutMoodInput> | LetterCreateWithoutMoodInput[] | LetterUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutMoodInput | LetterCreateOrConnectWithoutMoodInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutMoodInput | LetterUpsertWithWhereUniqueWithoutMoodInput[]
    createMany?: LetterCreateManyMoodInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutMoodInput | LetterUpdateWithWhereUniqueWithoutMoodInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutMoodInput | LetterUpdateManyWithWhereWithoutMoodInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type LetterUncheckedUpdateManyWithoutMoodNestedInput = {
    create?: XOR<LetterCreateWithoutMoodInput, LetterUncheckedCreateWithoutMoodInput> | LetterCreateWithoutMoodInput[] | LetterUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutMoodInput | LetterCreateOrConnectWithoutMoodInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutMoodInput | LetterUpsertWithWhereUniqueWithoutMoodInput[]
    createMany?: LetterCreateManyMoodInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutMoodInput | LetterUpdateWithWhereUniqueWithoutMoodInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutMoodInput | LetterUpdateManyWithWhereWithoutMoodInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type MoodCreateNestedOneWithoutLettersInput = {
    create?: XOR<MoodCreateWithoutLettersInput, MoodUncheckedCreateWithoutLettersInput>
    connectOrCreate?: MoodCreateOrConnectWithoutLettersInput
    connect?: MoodWhereUniqueInput
  }

  export type TemporaryUserCreateNestedOneWithoutLettersInput = {
    create?: XOR<TemporaryUserCreateWithoutLettersInput, TemporaryUserUncheckedCreateWithoutLettersInput>
    connectOrCreate?: TemporaryUserCreateOrConnectWithoutLettersInput
    connect?: TemporaryUserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoodUpdateOneRequiredWithoutLettersNestedInput = {
    create?: XOR<MoodCreateWithoutLettersInput, MoodUncheckedCreateWithoutLettersInput>
    connectOrCreate?: MoodCreateOrConnectWithoutLettersInput
    upsert?: MoodUpsertWithoutLettersInput
    connect?: MoodWhereUniqueInput
    update?: XOR<XOR<MoodUpdateToOneWithWhereWithoutLettersInput, MoodUpdateWithoutLettersInput>, MoodUncheckedUpdateWithoutLettersInput>
  }

  export type TemporaryUserUpdateOneRequiredWithoutLettersNestedInput = {
    create?: XOR<TemporaryUserCreateWithoutLettersInput, TemporaryUserUncheckedCreateWithoutLettersInput>
    connectOrCreate?: TemporaryUserCreateOrConnectWithoutLettersInput
    upsert?: TemporaryUserUpsertWithoutLettersInput
    connect?: TemporaryUserWhereUniqueInput
    update?: XOR<XOR<TemporaryUserUpdateToOneWithWhereWithoutLettersInput, TemporaryUserUpdateWithoutLettersInput>, TemporaryUserUncheckedUpdateWithoutLettersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LetterCreateWithoutTemporaryUserInput = {
    id: string
    recipient: string
    message: string
    createdAt?: Date | string
    mood: MoodCreateNestedOneWithoutLettersInput
  }

  export type LetterUncheckedCreateWithoutTemporaryUserInput = {
    id: string
    recipient: string
    message: string
    moodId: number
    createdAt?: Date | string
  }

  export type LetterCreateOrConnectWithoutTemporaryUserInput = {
    where: LetterWhereUniqueInput
    create: XOR<LetterCreateWithoutTemporaryUserInput, LetterUncheckedCreateWithoutTemporaryUserInput>
  }

  export type LetterCreateManyTemporaryUserInputEnvelope = {
    data: LetterCreateManyTemporaryUserInput | LetterCreateManyTemporaryUserInput[]
    skipDuplicates?: boolean
  }

  export type LetterUpsertWithWhereUniqueWithoutTemporaryUserInput = {
    where: LetterWhereUniqueInput
    update: XOR<LetterUpdateWithoutTemporaryUserInput, LetterUncheckedUpdateWithoutTemporaryUserInput>
    create: XOR<LetterCreateWithoutTemporaryUserInput, LetterUncheckedCreateWithoutTemporaryUserInput>
  }

  export type LetterUpdateWithWhereUniqueWithoutTemporaryUserInput = {
    where: LetterWhereUniqueInput
    data: XOR<LetterUpdateWithoutTemporaryUserInput, LetterUncheckedUpdateWithoutTemporaryUserInput>
  }

  export type LetterUpdateManyWithWhereWithoutTemporaryUserInput = {
    where: LetterScalarWhereInput
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyWithoutTemporaryUserInput>
  }

  export type LetterScalarWhereInput = {
    AND?: LetterScalarWhereInput | LetterScalarWhereInput[]
    OR?: LetterScalarWhereInput[]
    NOT?: LetterScalarWhereInput | LetterScalarWhereInput[]
    id?: StringFilter<"Letter"> | string
    recipient?: StringFilter<"Letter"> | string
    message?: StringFilter<"Letter"> | string
    moodId?: IntFilter<"Letter"> | number
    temporaryUserId?: IntFilter<"Letter"> | number
    createdAt?: DateTimeFilter<"Letter"> | Date | string
  }

  export type LetterCreateWithoutMoodInput = {
    id: string
    recipient: string
    message: string
    createdAt?: Date | string
    temporaryUser: TemporaryUserCreateNestedOneWithoutLettersInput
  }

  export type LetterUncheckedCreateWithoutMoodInput = {
    id: string
    recipient: string
    message: string
    temporaryUserId: number
    createdAt?: Date | string
  }

  export type LetterCreateOrConnectWithoutMoodInput = {
    where: LetterWhereUniqueInput
    create: XOR<LetterCreateWithoutMoodInput, LetterUncheckedCreateWithoutMoodInput>
  }

  export type LetterCreateManyMoodInputEnvelope = {
    data: LetterCreateManyMoodInput | LetterCreateManyMoodInput[]
    skipDuplicates?: boolean
  }

  export type LetterUpsertWithWhereUniqueWithoutMoodInput = {
    where: LetterWhereUniqueInput
    update: XOR<LetterUpdateWithoutMoodInput, LetterUncheckedUpdateWithoutMoodInput>
    create: XOR<LetterCreateWithoutMoodInput, LetterUncheckedCreateWithoutMoodInput>
  }

  export type LetterUpdateWithWhereUniqueWithoutMoodInput = {
    where: LetterWhereUniqueInput
    data: XOR<LetterUpdateWithoutMoodInput, LetterUncheckedUpdateWithoutMoodInput>
  }

  export type LetterUpdateManyWithWhereWithoutMoodInput = {
    where: LetterScalarWhereInput
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyWithoutMoodInput>
  }

  export type MoodCreateWithoutLettersInput = {
    color: string
    mood: string
  }

  export type MoodUncheckedCreateWithoutLettersInput = {
    id?: number
    color: string
    mood: string
  }

  export type MoodCreateOrConnectWithoutLettersInput = {
    where: MoodWhereUniqueInput
    create: XOR<MoodCreateWithoutLettersInput, MoodUncheckedCreateWithoutLettersInput>
  }

  export type TemporaryUserCreateWithoutLettersInput = {
    username: string
  }

  export type TemporaryUserUncheckedCreateWithoutLettersInput = {
    id?: number
    username: string
  }

  export type TemporaryUserCreateOrConnectWithoutLettersInput = {
    where: TemporaryUserWhereUniqueInput
    create: XOR<TemporaryUserCreateWithoutLettersInput, TemporaryUserUncheckedCreateWithoutLettersInput>
  }

  export type MoodUpsertWithoutLettersInput = {
    update: XOR<MoodUpdateWithoutLettersInput, MoodUncheckedUpdateWithoutLettersInput>
    create: XOR<MoodCreateWithoutLettersInput, MoodUncheckedCreateWithoutLettersInput>
    where?: MoodWhereInput
  }

  export type MoodUpdateToOneWithWhereWithoutLettersInput = {
    where?: MoodWhereInput
    data: XOR<MoodUpdateWithoutLettersInput, MoodUncheckedUpdateWithoutLettersInput>
  }

  export type MoodUpdateWithoutLettersInput = {
    color?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateWithoutLettersInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    mood?: StringFieldUpdateOperationsInput | string
  }

  export type TemporaryUserUpsertWithoutLettersInput = {
    update: XOR<TemporaryUserUpdateWithoutLettersInput, TemporaryUserUncheckedUpdateWithoutLettersInput>
    create: XOR<TemporaryUserCreateWithoutLettersInput, TemporaryUserUncheckedCreateWithoutLettersInput>
    where?: TemporaryUserWhereInput
  }

  export type TemporaryUserUpdateToOneWithWhereWithoutLettersInput = {
    where?: TemporaryUserWhereInput
    data: XOR<TemporaryUserUpdateWithoutLettersInput, TemporaryUserUncheckedUpdateWithoutLettersInput>
  }

  export type TemporaryUserUpdateWithoutLettersInput = {
    username?: StringFieldUpdateOperationsInput | string
  }

  export type TemporaryUserUncheckedUpdateWithoutLettersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
  }

  export type LetterCreateManyTemporaryUserInput = {
    id: string
    recipient: string
    message: string
    moodId: number
    createdAt?: Date | string
  }

  export type LetterUpdateWithoutTemporaryUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: MoodUpdateOneRequiredWithoutLettersNestedInput
  }

  export type LetterUncheckedUpdateWithoutTemporaryUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    moodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LetterUncheckedUpdateManyWithoutTemporaryUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    moodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LetterCreateManyMoodInput = {
    id: string
    recipient: string
    message: string
    temporaryUserId: number
    createdAt?: Date | string
  }

  export type LetterUpdateWithoutMoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temporaryUser?: TemporaryUserUpdateOneRequiredWithoutLettersNestedInput
  }

  export type LetterUncheckedUpdateWithoutMoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    temporaryUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LetterUncheckedUpdateManyWithoutMoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    temporaryUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}