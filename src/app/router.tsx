import { createBrowserRouter } from "react-router";

import { EditorPage } from "@/pages/EditorPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    index: true,
    Component: EditorPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
