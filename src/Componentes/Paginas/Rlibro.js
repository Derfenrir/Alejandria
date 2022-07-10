import React, { useState } from "react";
import Axios from "../../Services/ConexionAxios";

    function Rlibro() {
      const variables = {
        img: "",
        nombre: "",
        id: "",
        autor: "",
      };
    
      const [valores, setValores] = useState(variables);
    
      const cambioEstado = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: value });
      };
    
    //Crear método para guardar información
    const Guardar=async()=>{
    Axios.post('/libro/guardar',{
     img:valores.img,
      nombre:valores.nombre,
     id:valores.id,
     autor:valores.autor,
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
        <div class="card-header">Registrar libro</div>
        <div class="card-body">
          <p class="card-text">
            <form onSubmit={Enviar}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Link de la imagen
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="img"
                  value={valores.img}
                  onChange={cambioEstado}
                  placeholder="nombre de la persona"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                  name="nombre"
                  value={valores.nombre}
                  onChange={cambioEstado}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  ID
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput3"
                  name="id"
                  value={valores.id}
                  onChange={cambioEstado}
                  placeholder="Introduzca su contraseña"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Autor
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput4"
                  name="autor"
                  value={valores.autor}
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

export default Rlibro