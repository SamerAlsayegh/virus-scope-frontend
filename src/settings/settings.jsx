const MAP_ID = 'streets';
const MAPTILER_ACCESS_TOKEN = '26cLttQaRCsX5ga6DFG1';


const dev = {
    // api: 'http://ec2-18-218-128-107.us-east-2.compute.amazonaws.com:8001/api',
    api: 'http://localhost:8001/api',
    mapProvider: function mapTilerProvider(x, y, z, dpr) {
        return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png`
    }
};

const prod = {
    api: 'http://ec2-18-218-128-107.us-east-2.compute.amazonaws.com:8001/api',
    mapProvider: function mapTilerProvider(x, y, z, dpr) {
        return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
    }
};


const config = process.env.STAGE === 'prod' ? prod : dev;

export default {
    ...config
};

