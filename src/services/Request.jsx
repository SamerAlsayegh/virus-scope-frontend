import axios from 'axios';
import settings from '../settings/settings';
import qs from 'qs';

const RequestService = {
    dataRequest({type, endpoint, data = {}, fullResponse = false, timeoutMs = 5000, version = "v1", api = settings.api}) {
        var formData = new FormData();

        Object.keys(data).forEach((key) => {
            (data[key] != null) && formData.append(key, data[key]);
            (data[key] == null) && delete data[key]
        });




        return new Promise((resolve, reject) => {
            let opts = {
                method: type,
                url: api + '/' + version + (endpoint != null ? '/' + endpoint : ''),
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // },
                withCredentials: true,
            };

            if (type.toLowerCase() === 'get')
                opts.params = data;
            else if (type.toLowerCase() === "post")
                opts.data = formData;
            else if (type.toLowerCase() === 'delete')
                opts.data = data;
            else {
                opts.data = qs.stringify(data);
            }

            axios(opts)
                .then((res) => {
                    console.log(res);
                    if (res && !res.status) throw new Error('Network Error');
                    if (!fullResponse) resolve((res.data && res.data.result ) || res.data);
                    else resolve(res);
                }).catch(err => {
                    console.log(err);
                let data = (err.response && err.response.data);
                reject({
                    response: data,
                    message: (data && data.result && data.result.message) || (data && data.message)
                });
            });
        });
    },

    get(endpoint, data = {}, fullResponse = false, timeoutMs = 5000, version = "v1") {
        return RequestService.dataRequest({type: 'GET', endpoint, data, fullResponse, timeoutMs, version});
    },
    post(endpoint, data = {}, fullResponse = false, timeoutMs = 5000, version = "v1") {
        return RequestService.dataRequest({type: 'POST', endpoint, data, fullResponse, timeoutMs, version});
    },
};

export default RequestService;
