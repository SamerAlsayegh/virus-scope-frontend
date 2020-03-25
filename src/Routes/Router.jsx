import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import MapView from "./Pages/MapView/MapView";


export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about-us",
        component: AboutUs
    },
    {
        path: "/map-view",
        component: MapView
    },
]

