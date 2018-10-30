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

    login(email, password, success, failure) {
        fetch(BASE_URL + '/Login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
        })
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