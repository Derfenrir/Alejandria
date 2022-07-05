import React, { Component } from 'react'

export class Iniciar extends Component {
  render() {
    return (
      <div className='container'>
        <h1>
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Correo Electronico. </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"> Nunca compartiremos su correo electrónico con nadie más. </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Contraseña. </label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" class="form-text"> Nunca compartiremos su contraseña con nadie más.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </h1>
      </div>
    )
  }
}

export default Iniciar