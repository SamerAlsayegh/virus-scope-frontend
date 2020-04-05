import Home from "./Pages/Home";
import Error404 from "../Errors/Error404";
import Settings from "./Pages/Settings";
import HospitalList from "./Pages/HospitalList";
import DashboardAnalytics from "./Pages/Dashboard/DashboardAnalytics";
import DashboardDefault from "./Pages/Dashboard/Default";


export default [
    {
        path: "/",
        exact: true,
        component: DashboardDefault
    },
    {
        path: "/analytics",
        component: DashboardAnalytics
    },
    {
        path: `/management/hospitals`,
        exact: true,
        component: HospitalList
    },
    {
        path: "/",
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

