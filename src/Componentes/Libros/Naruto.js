import React, { useState,useEffect } from "react";
import Axios from "../../Services/ConexionAxios";
import {Link} from 'react-router-dom'

import {useParams,useNavigate} from 'react-router-dom';




function Naruto() {
 
  const [ubicacion,setUbicacion]=useState([]);  


const params=useParams();



  const consultarOne=async()=>{
    const consultaUno=await Axios.get('/temas/consultarOne/'+params.id);
    setUbicacion(consultaUno.data);
    console.log(consultaUno.data);
  }

  

  

  useEffect(() => {
   consultarOne();
   
  }, [params.id])
 

  return (
  
    <div className="container-fluid p-2 justify-content-center align-items-center  h-105 ">
      <div className="row">
        
             
                 <div class="card mb-3" >
                <div class="row g-0">
               <div class="col-md-4">
               <img src={ubicacion.img} height="400" width="400"/>
                </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{ubicacion.nombre}</h5>
        <p class="card-text">{ubicacion.autor}</p>
        <p class="card-text"><h4>Descripcion</h4></p>
        <p class="card-text"><small class="text-muted">{ubicacion.descripcion}</small></p>
      </div>
    </div>
  </div>
</div>
              
                         
     

    </div>
    <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Lista de capitulos
  </a>
  <Link to="/cap1" class="list-group-item list-group-item-action">Capitulo 1</Link>
  <Link to="/cap2" class="list-group-item list-group-item-action">Capitulo 2</Link>
  <Link to="/cap3" class="list-group-item list-group-item-action">Capitulo 3</Link>
  <a class="list-group-item list-group-item-action disabled">Proxima actualizacion</a>
</div>
    </div>

    
  );
  
}

export default Naruto