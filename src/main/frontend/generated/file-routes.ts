import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Page1 from "../views/components/CustomerComponent.js";
import * as Page2 from "../views/components/CustomerCrudComponent.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", Page0),
    createRoute("components", [
        createRoute("CustomerComponent", Page1),
        createRoute("CustomerCrudComponent", Page2)
    ])
];
export default routes;
