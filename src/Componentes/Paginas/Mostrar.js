import React,{useState,useEffect} from "react";

import Axios from "../../Services/ConexionAxios";



function Mostrar() {

  const [personas,setPersonas]=useState([]);

  const Consultar=async()=>{
    const consulta=await Axios.get('/persona/consultar');
    setPersonas(consulta.data);
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
  {personas.map((persona,index)=>{
   
  })} 
 
</div>

<hr/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Contraseña</th>
    </tr>
  </thead>
  <tbody>
    {personas.map((persona,index)=>{
      return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{persona.nombre}</td>
        <td>{persona.email}</td>
        <td>{persona.contraseña}</td>
      </tr>
      )
    })}
   
   
  </tbody>
</table>
</div>
  );
}

export default Mostrar;
