import React, { Component } from 'react'

export class Registrar extends Component {
  render() {
    return (
      <div>
       <div className='container'>
          <h1>
          <form>
  <div class="mb-3">
    <label  class="form-label"> Usuario. </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label  class="form-label"> Correo Electronico. </label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" class="form-text"> Nunca compartiremos su correo electrónico con nadie más.</div>
  </div>

  <div class="mb-3">
    <label class="form-label"> Contraseña. </label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" class="form-text"> Nunca compartiremos su contraseña con nadie más.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          </h1>
        </div>
      </div>
    )
  }
}

export default Registrar