import Axios from "axios";
export default Axios.create({
   baseURL: 'https://server-ale.herokuapp.com/api/'//'http://localhost:4000/api/'
})