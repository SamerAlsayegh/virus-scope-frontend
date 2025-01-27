import React, {useEffect} from 'react';
import UserWrapper from "./User/Wrapper";
import AdminWrapper from "./Admin/Wrapper";
import HospitalWrapper from "./Hospital/Wrapper";
import Home from "./Public/Home";
import Grid from "@material-ui/core/Grid";
import NavBar from "./User/NavBar";
import {renderRoutes} from "react-router-config";
import Router from "./User/Router";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../redux/user/actions";
import {useHistory} from "react-router";

export default () => {
    const history = useHistory();
    const {user} = useSelector(state => state.user);

    const publicFallbackRoutes = [
        {
            path: "/",
            exact: true,
            component: Home
        },
    ];

    function getActiveWrapper() {
        let scope = user && user.scope;
        if (scope === 'admin') return <AdminWrapper/>;
        else if (scope === 'hospital') return <HospitalWrapper/>;
        else if (scope === 'user') return <UserWrapper/>;
        else return <>
                {renderRoutes(publicFallbackRoutes.map((route) => ({
                    ...route,
                    component: (props) => route.component({...props}),
                })))}
            </>
    }

    return getActiveWrapper()
}

