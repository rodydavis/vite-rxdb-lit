import "@material/mwc-dialog";
import "@material/mwc-button/mwc-button";

import { html, TemplateResult } from "lit";

interface DialogOptions {
  open: boolean;
  title: string;
  content: () => TemplateResult;
  dismiss: (target: HTMLElement) => void;
}

export const appDialog = (options: DialogOptions) => {
  return html`<mwc-dialog
    ?open=${options?.open ?? false}
    heading="${options.title}"
    @closed=${(e: any) => options.dismiss(e.target)}
  >
    <div>${options.content()}</div>
  </mwc-dialog>`;
};

interface DialogActionOptions {
  label: string;
  action?: string;
  callback: () => void;
}
export const dialogAction = (options: DialogActionOptions) => {
  return html` <mwc-button
    slot="primaryAction"
    dialogAction="${options?.action ?? "close"}"
    @click=${() => options.callback()}
  >
    ${options.label}
  </mwc-button>`;
};
