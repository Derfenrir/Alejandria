import React,{useState,useEffect} from "react";
import Axios from "../../Services/ConexionAxios";
import Diseño from './Cards.css';

import {useNavigate} from "react-router-dom";




function Biblioteca() {

  const [biblioteca,setBiblioteca]=useState([]);
  const [ubicacion, setUbicacion]=useState([]);

const navigate=useNavigate();

  const Consultar=async()=>{
    const consulta=await Axios.get('/libro/consultar');
    setBiblioteca(consulta.data);
   // console.log(consulta.data);
  }

  const consultaId=async(id)=>{
const buscar=await Axios.get(`/temas/consultarOne/${id}`);
setUbicacion(buscar.data);
  }

  

  useEffect(() => {
   Consultar();
   
  }, [])
  
  return (
  
    <div className="container-fluid p-2 justify-content-center align-items-center  h-105 ">
      <div className="row">
        {biblioteca.map((biblioteca) => {
              return(
                <div className="col-md-3" key={biblioteca.id}>
                    <div className="card text-center bg-dark animate__animated animate__fadeInUp "  >
                     
                      <div className="overflow">
                      <img src={biblioteca.img} height="220" width="200" className="card-img-top"/>
                      </div>
            
                      <div className="card-body text-light">
                            <h4 className="card-title">{biblioteca.nombre}</h4>
                            <p className="card-text">{biblioteca.autor}</p>
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
