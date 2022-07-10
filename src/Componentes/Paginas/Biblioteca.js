import React,{useState,useEffect} from "react";

import Axios from "../../Services/ConexionAxios";



function Biblioteca() {

  const [biblioteca,setBiblioteca]=useState([]);

  const Consultar=async()=>{
    const consulta=await Axios.get('/libro/consultar');
    setBiblioteca(consulta.data);
   // console.log(consulta.data);
  }

  const Eliminar=async(id)=>{

    if(window.confirm("¿Esta segure de eliminar el date?")){
      await Axios.delete(`/persona/eliminar/${id}`);
      console.log('Datos eliminados correctamente');
    }
   
    Consultar();
  }

  useEffect(() => {
   Consultar();
   
  }, [])
  
  return (
   
<div className="container-fluid p-2">
<div class="row">
  {biblioteca.map((biblioteca,index)=>{
    return(
<div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{biblioteca.nombre}</h5>
        <h5 >{biblioteca.img} </h5>
        <p class="card-text">{biblioteca.id}</p>
        <p class="card-text">{biblioteca.autor}</p>
        <a href="#" class="btn btn-primary">Ir a</a>
        <button type="button" class="btn btn-danger" onClick={()=>Eliminar(biblioteca._id)}>Eliminar</button>
      </div>
    </div>
  </div>
    )
  })} 
 
</div>

<hr/>


</div>
  );
}

export default Biblioteca;
