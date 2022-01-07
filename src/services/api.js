import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes/

const Api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default Api;