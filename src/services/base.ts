import { RxCollection, RxDocument, RxJsonSchema } from "rxdb";
import type { TopLevelProperty } from "rxdb/dist/types/types";

export interface Base {
  id: string;
  [key: string]: any;
}

type BaseMethods = {};

type BaseStatics = {};

export type BaseCollection<
  T extends Base,
  M extends BaseMethods = BaseMethods,
  C extends BaseStatics = BaseStatics
> = RxCollection<T, M, C>;

export type BaseDoc<T extends Base> = RxDocument<T, BaseMethods>;

export interface SchemaOptions {
  title: string;
  description?: string;
  version?: number;
  keyCompression?: boolean;
  properties: {
    [key: string]: TopLevelProperty;
  };
}

export function buildSchema<T extends Base>(
  options: SchemaOptions
): RxJsonSchema<T> {
  return {
    title: options.title,
    description: options?.description ?? options.title,
    version: options?.version ?? 0,
    keyCompression: options?.keyCompression ?? true,
    type: "object",
    // @ts-ignore
    properties: {
      id: {
        type: "string",
        primary: true,
      },
      ...options.properties,
    },
    required: [
      "id",
      ...Object.entries(options.properties)
        .filter((n) => {
          const [_, value] = n;
          return value.required;
        })
        .map((n) => {
          const [key, _] = n;
          return key;
        }),
    ],
  };
}

const _methods: BaseMethods = {};

const _statics: BaseStatics = {};

export function createBase<T extends Base>(options: SchemaOptions) {
  return {
    schema: buildSchema<T>(options),
    methods: _methods,
    statics: _statics,
  };
}
