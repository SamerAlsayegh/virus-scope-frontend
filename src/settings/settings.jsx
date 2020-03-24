const dev = {
    api: 'http://localhost:8000/api',
};

const prod = {
    api: 'http://localhost:8000/api',

};


const config = process.env.STAGE === 'prod' ? prod : dev;

export default {
    ...config
};

