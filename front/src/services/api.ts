import axios from "axios";

const api = axios.create({
    baseURL:"https://cad-client-contact.onrender.com/",
    timeout:30000
})


export default api

