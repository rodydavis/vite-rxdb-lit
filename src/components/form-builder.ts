import { html, TemplateResult } from "lit";

export const formBuilder = (
  content: TemplateResult,
  onSubmit: (form: HTMLFormElement) => void
) => {
  return html`<form
    @submit=${(e: any) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      onSubmit(form);
    }}
  >
    ${content} <br />
    <input type="submit" value="Submit" />
  </form>`;
};

export const input = (
  id: string,
  label: string,
  options?: { type?: "text" | "number"; required?: boolean }
) => {
  return html`
    <div>
      <label for="${id}">${label}</label><br />
      <input
        id="${id}"
        type="${options?.type ?? "text"}"
        ?required=${options?.required ?? false}
      />
    </div>
  `;
};

export const inputValue = (
  form: HTMLFormElement,
  id: string,
  fallback: string = ""
) => {
  const input = form.querySelector(`#${id}`) as HTMLInputElement;
  const value = input.value;
  if (value.length > 0) return value;
  return fallback;
};
