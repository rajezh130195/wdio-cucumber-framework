const axios = require('axios');

class RESTUtils {
    static async getTemporaryToken(dbid) {
        try {
            const url = `https://api.quickbase.com/v1/auth/temporary/${dbid}`;
            
            const headers = {
                'QB-Realm-Hostname': '{QB-Realm-Hostname}',
              'User-Agent': '{User-Agent}',
              'QB-App-Token': '{QB-App-Token}',
              'Content-Type': 'application/json'
          }

            const response = await axios.get(url, { headers });
            return response.data; 
        } catch (error) {
            console.error(`Error fetching temporary token: ${error.response ? error.response.data : error.message}`);
            throw error;
        }
    }
}

module.exports = RESTUtils();
