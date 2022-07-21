import React,{useState,useEffect} from "react";
import Axios from "../../Services/ConexionAxios";
import Cards from './Cards'




const Inicio = () => {
  //const [biblioteca,setBiblioteca]=useState([]);
  const [ubicacion,setUbicacion]=useState([]); 

 // const Consultar=async()=>{
   // const consulta=await Axios.get('/libro/consultar');
    //setBiblioteca(consulta.data);
   // console.log(consulta.data);
 // }

 const consultarUbicacion=async()=>{
  const respuesta=await Axios.get('/temas/consultar');
  setUbicacion(respuesta.data);
  }

  useEffect(() => {
  // Consultar();
   consultarUbicacion();
  }, [])
  
  return (
  
    <div className="container d-flex justify-content-center align-items-center  h-75 ">
      <div className="row">
        {
            ubicacion.map((ubicacion) => (
              <div className="col-md-3" key={ubicacion.id}>
            <Cards  imageSource={ubicacion.img}  title={ubicacion.nombre} text={ubicacion.autor}/>
          </div>

          
           
          ))
        }
     

    </div>
    </div>

    
  )
}

export default Inicio