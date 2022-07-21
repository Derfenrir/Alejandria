import React, { useState,useEffect } from "react";
import Axios from "../../Services/ConexionAxios";
import {Link} from 'react-router-dom'

function Capitulo2() {
  return (
    <div>
        <h2>Capitulo2</h2>
        <Link to="/cap1" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Prev</Link>
        <Link to="/cap3" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Next</Link>
        </div>
  )
}

export default Capitulo2