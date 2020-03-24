import React, {useEffect, useState} from 'react';
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import extraStyles from "./styles.scss";
import {makeStyles} from "@material-ui/styles";
import LocationSearch from "../../../components/LocationSearch";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    mapSearchField:{
        position: `fixed`,
        top: '80px',
        left: '10px',
        zIndex: 10
    },
    ...extraStyles
});


export default (props) => {
    let classes = useStyles();
    const {KeyLocations} = props;

    const [centerLocation, setCenterLocation ] = useState([50.879, 4.6997])
    useEffect(()=>{
        let minX, minY, maxX, maxY;

        KeyLocations.map(({location})=>{
            if (minX == null || minX > location.longitude) minX = location.longitude;
            if (minY == null || minY > location.latitude) minY = location.latitude;
            if (maxX == null || maxX < location.longitude) maxX = location.longitude;
            if (maxY == null || maxY < location.latitude) maxY = location.latitude;
        });
        setCenterLocation([
            (minY+maxY)/2,
            (minX+maxX)/2,
        ])


    }, [KeyLocations])


    function mapTilerProvider (x, y, z, dpr) {
        return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`
    }


    return <div style={{height: "100%", position: "relative"}}>

        <Paper  className={classes.mapSearchField}>
            <LocationSearch/>
        </Paper>
        <div style={{height: "100%", position: "relative"}}>
            <Map
                provider={mapTilerProvider}
                attribution={'VirusScope'}
                attributionPrefix={'OpenStreetMap'}
                center={centerLocation} zoom={12}>
                {KeyLocations.map(({location}) => <Overlay anchor={[location.latitude, location.longitude]} offset={[12.5, 12.5]}>
                    <div style={{width: 25, height: 25}}>
                        <div className="pulsating-circle"/>
                    </div>
                </Overlay>)}
            </Map>
        </div>
    </div>;
}

