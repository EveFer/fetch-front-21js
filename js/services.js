const URL_BASE_API = 'http://localhost:8080'

function createKoder(newKoder){
    const URL = `${URL_BASE_API}/koders`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newKoder)
    }
    return fetch(URL, options) // regresa una promesa
}

function getKoders(token ) {
    const URL = `${URL_BASE_API}/koders`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }
    return fetch(URL, options) // regresa una promesa
}

function login(credentials){
    const URL = `${URL_BASE_API}/auth/login`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    return fetch(URL, options) // regresa una promesa
}

export {createKoder, getKoders, login}