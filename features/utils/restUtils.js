const axios = require('axios');

class RESTUtils {
    async sendRequest(method, url, data = {}, headers = {"Content-Type": "application/xml"}){
        try {
            const response = await axios({
                method,
                url,
                data,
                headers,
                params
            });
            return response.data;
        } catch (error) {
            console.error(`API Request Failed: ${error.response ? error.response.data : error.message}`);
            throw error;
        }
    }
}

module.exports = new RESTUtils();
