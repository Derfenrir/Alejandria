import React from 'react'
import Cards from './Cards'

import boku1 from '../Imagenes/boku.jpg'
import magia1 from '../Imagenes/magia.jpg'
import muerto1 from '../Imagenes/muerto.jpg'

const cards = [
  {
    id: 1,
    title: 'Fazt Web',
    image: boku1

  },
  {
    id: 2,
    title: 'Magia',
    image: magia1
  },
  {
    id:3,
    title: 'Muerto',
    image: muerto1
  }
]


const Inicio = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col-md-3">
          <Cards/>
      </div>
      <div className="col-md-3">
          <Cards/>
      </div>
      <div className="col-md-3">
          <Cards/>
      </div>
      <div className="col-md-3">
          <Cards/>
      </div>

    </div>
    </div>

    
  )
}

export default Inicio