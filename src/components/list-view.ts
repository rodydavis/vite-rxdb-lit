import { html, TemplateResult } from "lit";

export const listViewBuilder = <T = any>(
  items: T[],
  builder: (item: T, index: number) => TemplateResult
) => {
  return html` <ul>
    ${items?.map((n: any, i) => {
      return html`<li>${builder(n, i)}</li>`;
    })}
  </ul>`;
};
