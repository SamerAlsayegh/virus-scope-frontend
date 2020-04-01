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
        path: "/",
        exact: true,
        component: Home
    },
    {
        component: Error404
    },
]

