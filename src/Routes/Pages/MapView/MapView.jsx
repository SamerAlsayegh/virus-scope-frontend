import React from 'react';
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import Grid from "@material-ui/core/Grid";
import extraStyles from "./styles.scss";
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    ...extraStyles
});


export default () => {
    return <div style={{height: "100%", position:"relative"}}>
        <div style={{height: "100%", position:"relative"}}>
                    <Map  center={[50.879, 4.6997]} zoom={12}>
            <Overlay anchor={[50.879, 4.6997]} offset={[12.5, 12.5]}>
                <div style={{width: 25, height: 25}}>
                    <div className="pulsating-circle"/>
                </div>
            </Overlay>
        </Map>
        </div>
    </div>;
}

