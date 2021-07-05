import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { RxDatabase, RxDocument } from "rxdb";
import { actionButton } from "../components/app-bar";
import { appDialog } from "../components/app-dialog";
import { appScaffold } from "../components/app-scaffold";
import { formBuilder, input, inputValue } from "../components/form-builder";
import { listViewBuilder } from "../components/list-view";
import { dbProvider, queryBuilder, Schema } from "../services/database";
import { Todo } from "../services/todos";

@customElement("todo-view")
export class TodoView extends LitElement {
  static styles = css``;
  @state() showNew = false;

  render() {
    return dbProvider((db) => {
      db.todos.$.subscribe(() => {
        this.requestUpdate();
      });
      return appScaffold({
        title: "TODOS",
        root: this.shadowRoot!,
        actions: [
          actionButton("delete", async () => {
            await db.todos.remove();
            this.requestUpdate();
          }),
          actionButton("add", async () => {
            this.showNew = !this.showNew;
          }),
        ],
        body: () => {
          return html`
            ${queryBuilder<Todo>(db.todos.find(), (res) => {
              if (Array.isArray(res)) {
                return listViewBuilder(res, (item) => {
                  return this.buildItem(db, item);
                });
              }
              return this.buildItem(db, res);
            })}
            ${appDialog({
              title: "New Todo",
              open: this.showNew,
              dismiss: () => {
                if (this.showNew) this.showNew = false;
              },
              content: () => {
                return html`
                  ${formBuilder(
                    html` ${input("title", "Title", { required: true })} `,
                    async (form) => {
                      await db.todos.insert({
                        id: `${Date.now()}`,
                        title: inputValue(form, "title"),
                      });
                      this.showNew = false;
                    }
                  )}
                `;
              },
            })}
          `;
        },
      });
    });
  }

  buildItem(db: RxDatabase<Schema>, item: RxDocument<Todo>) {
    return html` <div>
      <input
        .value=${item.title}
        @change=${async (e: any) => {
          const value = e.target.value;
          await db.todos.upsert({
            ...item.toJSON(),
            title: value,
          });
          this.requestUpdate();
        }}
      />
      <button
        @click=${async () => {
          await item.remove();
          this.requestUpdate();
        }}
      >
        Delete
      </button>
    </div>`;
  }
}
