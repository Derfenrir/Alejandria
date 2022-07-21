import Axios from "axios";
export default Axios.create({
   baseURL:  'http://localhost:4000/api'//'https://server-ale-heroku-22.herokuapp.com/api/'
})

