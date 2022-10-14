// fetch('http://example.com/movies.json', options)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

import {createKoder, getKoders, login} from './services.js'


async function getDataForm() {
    try {
        // obtener la data del formulario
    // generar el objeto que se mandará al endpoint
        const koder = {
            name: 'Sina',
            lastName: 'Urias',
            age: 31,
            gender: 'h',
            email: 'sina@gmail.com',
            password: 'kodemia123'
        }

        // mandar a llamar la función donde lo mando a mi endpoint
        const response = await createKoder(koder)
        console.log(response)
        const data = await response.json()
        console.log(data)
        if(response.status === 200 ){
            // que sigue
            return
        }
        console.log('Ocurrio un error')
        console.log(data.message)
    } catch (error) {
        console.log('Ocurrio algun error', error)
    }
    
}

// getDataForm()




async function printTable() {
    const token = sessionStorage.getItem('tokenAuth')
    const response = await getKoders(token)
    const data = await response.json()
    console.log(response)
    console.log(data)
}

printTable()





async function getDataFormLogin() {
    // Obtener la data del formulario
    // crear el objeto que mandaremos al login

    const credentials = {
        email: 'sina@gmail.com',
        password: 'kodemia123'
    }

    const response = await login(credentials)
    const data = await response.json()
    console.log(response)
    console.log(data)
    sessionStorage.setItem('tokenAuth', data.token)
}

// getDataFormLogin()



