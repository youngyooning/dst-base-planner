import { createBrowserRouter } from "react-router";

import { AppLayout } from "@/app/layouts/AppLayout";
import { EditorPage } from "@/pages/EditorPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: EditorPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
