import React,{useState,useEffect} from "react";
import Axios from "../../Services/ConexionAxios";
import Diseño from './Cards.css';

import {useNavigate} from "react-router-dom";




function Biblioteca() {

 
  
  const [ubicacion,setUbicacion]=useState([]); 
 // const [biblioteca,setBiblioteca]=useState([]);  

const navigate=useNavigate();

const consultarUbicacion=async()=>{
const respuesta=await Axios.get('/temas/consultar');
setUbicacion(respuesta.data);
}

//const consultar=async()=>{
  //const respuesta=await Axios.get('/libro/consultar');
  //setBiblioteca(respuesta.data);
  //}

  

  useEffect(() => {

   consultarUbicacion();
   //consultar();
   
  }, [])
  
  return (
  
    <div className="container-fluid p-2 justify-content-center align-items-center  h-105 ">
      <div className="row">
        {ubicacion.map((ubicacion) => {
              return(
                <div className="col-md-3">
                    <div className="card text-center bg-dark animate__animated animate__fadeInUp "  >
                     
                      <div className="overflow">
                      <img src={ubicacion.img} height="220" width="200" className="card-img-top"/>
                      </div>
            
                      <div className="card-body text-light">
                            <h4 className="card-title">{ubicacion.nombre}</h4>
                            <p className="card-text">{ubicacion.autor}</p>
                            <button type="button" class="btn btn-primary" onClick={()=>navigate(`/naruto/${ubicacion._id}`)}>
                            <i class="material-icons">Leer ...</i></button>

                      </div>
                    </div>
                    </div>
              )
                          })}
     

    </div>
    </div>

    
  );
  
}


export default Biblioteca;
