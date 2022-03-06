import axios from 'axios';

const httpClient = () => {
    return {
        get : (url) => axios.get(url)
    }
}

export default httpClient;