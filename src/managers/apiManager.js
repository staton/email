const BASE_URL = 'http://localhost';

class ApiManager {

    loadEmails(success, failure) {
        fetch(BASE_URL + '/LoadEmails')
            .then((response) => response.json())
            .then((response) => success(response))
            .catch((err) => { 
                console.warn(err);
                failure(err);
            });
    }

}

const API_MANAGER = new ApiManager();

export default API_MANAGER;