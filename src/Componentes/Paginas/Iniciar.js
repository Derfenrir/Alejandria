import React from 'react'

export default function Iniciar() {
  return (
    <div className="container-fluid p-4">
      <div class="card">
      <div class="card-header">Iniciar sesion</div>
      <div class="card-body">
      <p class="card-text">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre de usuario</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Introduzaca nombre de usuario"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
  <input type="password" class="form-control" id="1" placeholder="Introduzca la contraseña"/>
</div>
</p>
</div>
</div>
    </div>
  )
}
