import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Error404 from "../Errors/Error404";


export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/analytics",
        component: Dashboard
    },
    {
        path: `/management/patients`,
        exact: true,
        component: Home
    },
    {
        path: `/management/patients/new`,
        exact: true,
        component: Home
    },
    {
        path: `/settings`,
        exact: true,
        component: Home
    },
    {
        path: `/settings/general`,
        exact: true,
        component: Home
    },
    {
        path: `/settings/security`,
        exact: true,
        component: Home
    },
    {
        component: Error404
    },
]

