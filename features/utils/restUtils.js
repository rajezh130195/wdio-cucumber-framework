const axios = require('axios');

class RESTUtils {
    async performRequest(method, url, data = {}, headers = {}) {
        try {
            const response = await axios({
                method,
                url,
                data,
                headers
            });
            return response;
        } catch (error) {
            console.error(`API Request Failed: ${error.response ? error.response.data : error.message}`);
            throw error;
        }
    }
}

module.exports = new RESTUtils();
