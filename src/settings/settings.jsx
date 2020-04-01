const dev = {
    // api: 'http://ec2-18-218-128-107.us-east-2.compute.amazonaws.com:8001/api',
    api: 'http://localhost:8001/api',

};

const prod = {
    api: 'http://ec2-18-218-128-107.us-east-2.compute.amazonaws.com:8001/api',

};


const config = process.env.STAGE === 'prod' ? prod : dev;

export default {
    ...config
};

