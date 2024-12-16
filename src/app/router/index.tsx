import { LazyLoader } from "@shared/components/common/load-component";
import { ERoutes } from "@shared/enums/routes";
import { BaseLayout } from "@widgets/layouts/base-layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NewEmployeePage = LazyLoader(lazy(() => import("@pages/employee/new")));
const EventsPage = LazyLoader(lazy(() => import("@pages/events/events-page")));
const EmployeePage = LazyLoader(
  lazy(() => import("@pages/employee/employee-page"))
);
const EventPage = LazyLoader(lazy(() => import("@pages/events/event-page")));
const EventStatisticsPage = LazyLoader(
  lazy(() => import("@pages/events/statistics"))
);
const DashboardPage = LazyLoader(
  lazy(() => import("@pages/events/dashboard/main"))
);
const EmployeesPage = LazyLoader(
  lazy(() => import("@pages/employee/employees-page"))
);
const EventEmployeePage = LazyLoader(
  lazy(() => import("@pages/employee/event-employee"))
);
const UnregisterPersonPage = LazyLoader(
  lazy(() => import("@pages/employee/unregister-person"))
);
const EditEmployeePage = LazyLoader(lazy(() => import("@pages/employee/edit")));
export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        element: <NewEmployeePage />,
        path: ERoutes.NEW_EMPLOYEE,
      },
      {
        element: <EmployeePage />,
        path: ERoutes.EMPLOYEE,
      },
      {
        element: <EventsPage />,
        path: ERoutes.EVENTS,
      },
      {
        element: <EventPage />,
        path: ERoutes.EVENT,
      },
      {
        element: <EventStatisticsPage />,
        path: ERoutes.EVENT_STATISTICS,
      },
      {
        element: <DashboardPage />,
        path: ERoutes.EVENT_DASHBOARD,
      },
      {
        element: <EmployeesPage />,
        path: ERoutes.EMPLOYEES,
      },
      {
        element: <EventEmployeePage />,
        path: ERoutes.EVENT_EMPLOYEE,
      },
      {
        element: <UnregisterPersonPage />,
        path: ERoutes.UNREGISTER_PERSON,
      },
      {
        element: <EditEmployeePage />,
        path: ERoutes.EDIT_EMPLOYEE,
      },
    ],
  },
]);
