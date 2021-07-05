import { TemplateResult, html } from "lit";
import { until } from "lit/directives/until.js";
import { DEFAULT_LOADING } from "./loading";

export const futureBuilder = <T = any>(
  future: Promise<T>,
  builder: (result: T) => TemplateResult,
  loading: TemplateResult = DEFAULT_LOADING
) => {
  const content = future.then((result) => builder(result));
  return html`${until(content, loading)}`;
};
