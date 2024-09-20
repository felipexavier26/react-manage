import axios from 'axios';

const BackEnd_url = axios.create({
    baseURL: 'http://localhost:5000',
});


export default BackEnd_url; 
