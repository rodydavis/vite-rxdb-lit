import "@babel/polyfill";

import {
  addRxPlugin,
  createRxDatabase,
  RxDatabase,
  RxDocument,
  RxQuery,
} from "rxdb";

// @ts-ignore
import * as idb from "pouchdb-adapter-idb";
import { TemplateResult } from "lit";
import { futureBuilder } from "../components/future-builder";
import { Todo, todosSchema } from "./todos";
import { Base, BaseCollection } from "./base";
import { DEFAULT_LOADING } from "../components/loading";

const DATABASE_NAME = "todos" + "db";

addRxPlugin(idb);

export type Schema = {
  todos: BaseCollection<Todo>;
};

export var db: RxDatabase<Schema>;

async function setupDB() {
  if (db) return db;
  db = await createRxDatabase<Schema>({
    name: DATABASE_NAME,
    adapter: "idb",
  });
  await db.addCollections({
    todos: todosSchema,
  });
  return db;
}

export const dbProvider = (
  builder: (db: RxDatabase<Schema>) => TemplateResult,
  loading: TemplateResult = DEFAULT_LOADING
) => {
  return futureBuilder(setupDB(), (res) => builder(res), loading);
};

export const queryBuilder = <T extends Base>(
  query: RxQuery<any>,
  builder: (result: RxDocument<T> | RxDocument<T>[]) => TemplateResult,
  loading: TemplateResult = DEFAULT_LOADING
) => {
  return futureBuilder(query.exec(), (res) => builder(res), loading);
};
