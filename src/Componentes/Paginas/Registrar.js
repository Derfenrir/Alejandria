import React, { useState } from "react";
import Axios from "../../Services/ConexionAxios";

    function Registrar() {
      const variables = {
        nombre: "",
        email: "",
        contraseña: "",
      };
    
      const [valores, setValores] = useState(variables);
    
      const cambioEstado = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: value });
      };
    
    //Crear método para guardar información
    const Guardar=async()=>{
    Axios.post('/persona/guardar',{
     
      nombre:valores.nombre,
    email:valores.email,
    contraseña:valores.contraseña,
    }).then(()=>{
      console.log('Registro guardado con exito');
    })
    }
    
    
      const Enviar = (e) => {
        e.preventDefault();
        Guardar();
      };
    return (
      <div className="container-fluid p-4">
      <div class="card">
        <div class="card-header">Registrar sesion</div>
        <div class="card-body">
          <p class="card-text">
            <form onSubmit={Enviar}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nombre"
                  value={valores.nombre}
                  onChange={cambioEstado}
                  placeholder="nombre de la persona"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={valores.email}
                  onChange={cambioEstado}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="contraseña"
                  value={valores.contraseña}
                  onChange={cambioEstado}
                  placeholder="Introduzca su contraseña"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
    )
  }

export default Registrar