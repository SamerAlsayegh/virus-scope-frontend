import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Error404 from "../Errors/Error404";
import Settings from "./Pages/Settings";
import DataList from "./Pages/DataList";


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
        path: "/data",
        exact: true,
        component: DataList
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

