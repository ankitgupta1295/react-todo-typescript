import axios from 'axios';

export const makeRequest = (method: any, endpoint: string, params: any, body: any, headers: any) => {
    const config = {
        method,
        params,
        headers,
        data: body,
        url: `${process.env.REACT_APP_TODOS_URL}${endpoint}`,
    };

    return axios.request(config)
}