import React, {useEffect, useState} from 'react';
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import extraStyles from "./styles.scss";
import {makeStyles} from "@material-ui/styles";
import LocationOverlay from "../../../components/LocationOverlay";

const useStyles = makeStyles({
    ...extraStyles
});


export default (props) => {
    let classes = useStyles();
    const {KeyLocations} = props;

    const [centerLocation, setCenterLocation] = useState([50.879, 4.6997]);
    const [activeAddress, setActiveAddress] = useState('')
    const [DataFilter, setDataFilter] = useState({})
    const [Data, setData] = useState([])
    const [Bounds, setBounds] = useState([])



    useEffect(() => {
        let minX, minY, maxX, maxY;

        KeyLocations.map((location) => {
            if (minX == null || minX > location.longitude) minX = location.longitude;
            if (minY == null || minY > location.latitude) minY = location.latitude;
            if (maxX == null || maxX < location.longitude) maxX = location.longitude;
            if (maxY == null || maxY < location.latitude) maxY = location.latitude;
        });
        setCenterLocation([
            (minY + maxY) / 2,
            (minX + maxX) / 2,
        ])

        setData(KeyLocations);
        console.log(KeyLocations);
    }, [KeyLocations]);


    useEffect(() => {

        let data = KeyLocations.map((point) => {
            const {start, end} = point;
            if (!(DataFilter.start && new Date(start).getTime() > new Date(DataFilter.start).getTime()))
                return null;

            if (!(DataFilter.end && new Date(end).getTime() < new Date(DataFilter.end).getTime()))
                return null;

            return point
        }).filter(item => item != null);

        console.log("Data is like", data, KeyLocations);
        setData(data);
    }, [DataFilter]);

    useEffect(() => {
        console.log(Data)
    }, [Data]);



    function mapTilerProvider(x, y, z, dpr) {
        return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png`
    }


    return <div style={{height: "100%", position: "relative"}}>

        <LocationOverlay PreExpandedPanels={["location"]} currentLocationAddress={activeAddress} DataFilter={DataFilter} setDataFilter={setDataFilter}/>
        <div style={{height: "100%", position: "relative"}}>
            <Map
                provider={mapTilerProvider}
                twoFingerDrag={true}

                onBoundsChanged={(params)=>{
                    //params.bounds.ne
                    //params.bounds.sw
                    // setBounds([])
                }}
                attribution={'VirusScope'}
                attributionPrefix={'OpenStreetMap'}
                center={centerLocation} zoom={12}>
                {Data.map((point) => <Overlay anchor={[point.latitude, point.longitude]}
                                                           offset={[12.5, 12.5]}>
                    <div style={{width: 25, height: 25}} onClick={()=>setActiveAddress(point)}>
                        <div className="pulsating-circle"/>
                    </div>
                </Overlay>)}
            </Map>
        </div>
    </div>;
}

