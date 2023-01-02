import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-a87d3/us-central1/api' //API endpoint
})

export default instance;