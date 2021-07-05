import { html, TemplateResult } from "lit";

import "@material/mwc-top-app-bar-fixed";
import "@material/mwc-icon-button";
import { iconButton } from "./app-button";

const TITLE = "Hymns for Worship";

export const appBar = (props: {
  navigation?: TemplateResult;
  title?: string;
  content?: TemplateResult;
  actions?: TemplateResult[];
}) => {
  return html` <mwc-top-app-bar-fixed>
    ${props?.navigation ?? ""}
    <div slot="title">${props?.title ?? TITLE}</div>
    ${props?.actions ?? ""}
    <div>${props?.content ?? ""}</div>
  </mwc-top-app-bar-fixed>`;
};

export const navigationIcon = (callback: () => void, icon: string = "menu") => {
  return iconButton({
    icon: icon,
    slot: "navigationIcon",
    callback: () => callback(),
  });
};

export const actionButton = (icon: string, callback: () => void) => {
  return iconButton({
    icon: icon,
    slot: "actionItems",
    callback: () => callback(),
  });
};
