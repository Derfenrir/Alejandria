import React, { useState,useEffect } from "react";
import Axios from "../../Services/ConexionAxios";
import {Link} from 'react-router-dom'

const capitulo1 = () => {

    
  return (
    <div>
        <h2>Capitulo1</h2>
        <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Prev</a>
        <Link to="/cap2" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Next</Link>
        
        <p className="card-text">
        Prólogo. Tres formas de sobrevivir en un mundo en ruinas.
        </p>
        <p className="card-text">
        Hay tres formas de sobrevivir en un mundo en ruinas. Ahora he olvidado algunas, pero una cosa es segura. Las personas que estén leyendo esto ahora sobrevivirán.
        </p>
        <p className="card-text">
        – Tres formas de sobrevivir en un mundo en ruinas.
        </p>
        <p className="card-text">
        Una página de novelas web llenó la pantalla de mi viejo teléfono. Deslicé la pantalla hacia abajo y luego hacia arriba de nuevo. ¿Cuántas veces he estado haciendo esto?
        </p>
        <p className="card-text">
        “¿En serio? ¿Es este el final?”
        </p>
        <p className="card-text">
        Miré de nuevo, y el ‘Finalizado’ era inconfundible. La historia había terminado.
        </p>
        <p className="card-text">
        ***
        </p>
        <p className="card-text">
        [Tres formas de sobrevivir en un mundo en ruinas]
        </p>
        <p className="card-text">
        Autor: tls123
        3,149 capítulos.
        ** *
        </p>
        <p className="card-text">
        Tres formas de sobrevivir en un mundo en ruinas es una novela de fantasía con 3.149 capítulos. El título abreviado es “The Paths of Survival”.
        </p>
        <p className="card-text">
        Comencé a leer esta novela desde mi tercer grado de la escuela secundaria.

En ese momento, me intimidaban constantemente, después de lo cual reprobé los exámenes de 
ingreso tratando de ingresar universidad local. Después de eso, sucedieron una serie de fallas
 y me empujaron a una unidad militar cerca de la frontera, luego cambié constantemente de trabajo y ahora conseguí un trabajo como contratista en una de las sucursales de una gran empresa… Maldita sea, cerremos este tema.
        </p>

        <p className="card-text">
        De todos modos…
        </p>
        <p className="card-text">
        [Nota del autor: Muchas gracias por leer Tres formas de sobrevivir en un mundo destrozado. ¡Volveré a ustedes con un epílogo!]

“Ah… Así que solo queda el epílogo. Bueno, aparentemente el próximo capítulo será realmente el último.”

Varios años de infancia y toda la vida adulta… Fueron 10 años muy largos. Experimenté una mezcla desagradable de tristeza y alegría, porque este mundo pronto desaparecerá, junto con mi sensación de satisfacción.
        </p>
         
        <p className="card-text">
        Abrí el cuadro de comentarios debajo de la última publicación del autor y reescribí mi reseña varias veces.

[Kim Dokja: Gracias por tu trabajo, autor. Estoy deseando que llegue el epílogo. ]
        </p>
        <p className="card-text">
        Estas fueron palabras sinceras. Survival Paths se convirtió en la novela de mi vida. Puede que no fuera popular, pero para mí fue la mejor novela del mundo.

Había muchas más palabras que quería decir, pero no pude escribirlas en los comentarios. Temía que mis palabras descuidadas pudieran lastimar al escritor.
        </p>
        </div>
  )
}

export default capitulo1