import DashboardAnalytics from "./Pages/Dashboard/DashboardAnalytics";
import Home from "./Pages/Home";
import Error404 from "../Errors/Error404";
import Settings from "./Pages/Settings";
import PatientList from "./Pages/PatientList";
import DashboardDefault from "./Pages/Dashboard/Default";


export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/dashboard",
        component: DashboardDefault
    },
    {
        path: "/analytics",
        component: DashboardAnalytics
    },
    {
        path: `/management/patients`,
        exact: true,
        component: PatientList
    },
    {
        path: `/management/patients/new`,
        exact: true,
        component: Home
    },
    {
        path: "/settings/:tab",
        exact: true,
        component: Settings
    },
    {
        component: Error404
    },
]

