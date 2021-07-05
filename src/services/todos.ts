import { Base, createBase } from "./base";

export interface Todo extends Base {
  title: string;
}

export const todosSchema = createBase<Todo>({
  title: "todos",
  properties: {
    title: {
      type: "string",
    },
  },
});
