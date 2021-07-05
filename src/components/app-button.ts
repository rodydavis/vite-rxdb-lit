import { html } from "lit";

import "@material/mwc-button";
import "@material/mwc-icon-button";

interface ButtonOptions {
  icon?: string;
  label?: string;
  action?: string;
  slot?: string;
  type?: string;
  form?: string;
  callback: () => void;
}
export const button = (options: ButtonOptions) => {
  return html` <mwc-button
    @click=${() => options.callback()}
    slot=${options?.slot ?? ""}
    label=${options?.label ?? ""}
    action=${options?.action ?? ""}
    type=${options?.type ?? ""}
    form=${options?.form ?? ""}
    icon=${options?.icon ?? ""}
  >
  </mwc-button>`;
};

export const iconButton = (options: ButtonOptions) => {
  return html` <mwc-icon-button
    @click=${() => options.callback()}
    slot=${options?.slot ?? ""}
    action=${options?.action ?? ""}
    type=${options?.type ?? ""}
    form=${options?.form ?? ""}
    icon=${options.icon ?? ""}
  >
  </mwc-icon-button>`;
};
