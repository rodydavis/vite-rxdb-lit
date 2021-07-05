import { TemplateResult } from "lit";
import { appBar, navigationIcon } from "./app-bar";
import { appDrawer, toggleDrawer } from "./app-drawer";

export interface ScaffoldOptions {
  root: HTMLElement | ShadowRoot;
  body: () => TemplateResult;
  actions?: TemplateResult[];
  title?: string;
}
export const appScaffold = (options: ScaffoldOptions) => {
  return appDrawer({
    appContent: appBar({
      title: options.title,
      navigation: navigationIcon(() => toggleDrawer(options.root)),
      content: options.body(),
      actions: options.actions ? options.actions : DEFAULT_ACTIONS,
    }),
  });
};

const DEFAULT_ACTIONS: TemplateResult[] = [];
