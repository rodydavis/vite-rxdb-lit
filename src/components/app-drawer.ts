import { html, TemplateResult } from "lit";

import "@material/mwc-drawer";
import { Drawer } from "@material/mwc-drawer";

export const appDrawer = (props: {
  title?: string;
  subtitle?: string;
  drawerContent?: TemplateResult;
  appContent?: TemplateResult;
  open?: boolean;
}) => {
  return html`
    <mwc-drawer hasHeader type="modal" ?open=${props?.open ?? false}>
      ${props?.title ? html` <span slot="title">${props.title}e</span>` : ""}
      ${props?.subtitle
        ? html` <span slot="subtitle">${props.subtitle}e</span>`
        : ""}
      <div>${props?.drawerContent ?? ""}</div>
      <div slot="appContent">${props?.appContent ?? ""}</div>
    </mwc-drawer>
  `;
};

export const toggleDrawer = (root: HTMLElement | ShadowRoot) => {
  const drawer = root.querySelector("mwc-drawer")! as Drawer;
  drawer.open = !drawer.open;
};
