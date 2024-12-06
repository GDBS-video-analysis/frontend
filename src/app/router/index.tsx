import { LazyLoader } from "@shared/components/common/load-component";
import { ERoutes } from "@shared/enums/routes";
import { DepartmentsProvider } from "@shared/services/departments-provider/provider";
import { PostsProvider } from "@shared/services/posts-provider/provider";
import { BaseLayout } from "@widgets/layouts/base-layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NewEmployeePage = LazyLoader(lazy(() => import("@pages/employee/new")));
const EventsPage = LazyLoader(lazy(() => import("@pages/events/all")));

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        element: <DepartmentsProvider />,
        children: [
          {
            element: <PostsProvider />,
            children: [
              {
                element: <NewEmployeePage />,
                path: ERoutes.NEW_EMPLOYEE,
              },
              {
                element: <EventsPage />,
                path: ERoutes.EVENTS,
              },
            ],
          },
        ],
      },
    ],
  },
]);
