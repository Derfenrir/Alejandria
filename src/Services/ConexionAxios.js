import Axios from "axios";
export default Axios.create({
   baseURL: 'https://server-ale-heroku-22.herokuapp.com/api/'
})

//no se por que no cambia el local 