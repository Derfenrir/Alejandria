import React from 'react'
import Card from './Cards.css'
import boku1 from '../Imagenes/boku.jpg'

function Cards() {
  return (
    <div>
        <div className="card"  >
          <img src={boku1} width="200 px" height="220 px" />
          <div className="card-body">
                <h6 className="card-title">Boku no Hero</h6>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href='#!' className="btn btn-outline-secondary">
                    Leer mas
                </a>
          </div>
        </div>
    </div>
  )
}

export default Cards