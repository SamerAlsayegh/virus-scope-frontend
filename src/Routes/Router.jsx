import Home from "../interfaces/Public/Home";
import AboutUs from "../interfaces/Public/AboutUs";
import MapView from "../interfaces/Public/MapView/MapView";
import ClientWrapper from "../interfaces/ClientWrapper";


export default [
    {
        path: "/about-us",
        component: AboutUs
    },
    {
        path: "/map-view",
        component: MapView
    },
    {
        component: ClientWrapper
    },


]

