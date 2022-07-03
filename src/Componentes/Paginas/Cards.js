import React from 'react'
import Diseño from './Cards.css'
import PropTypes from 'prop-types'



function Cards({title, imageSource, text, url}) {
  return (
    <div>
      <h1>Actualizaciones</h1>
        <div className="card text-center bg-dark animate__animated animate__fadeInUp "  >
         
          <div className="overflow">
          <img src={imageSource} height="220" width="200" className="card-img-top"/>
          </div>

          <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">
                {
                  text ? text : 'Hola como estas, yo estoy bien'
                }
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0 text-light" target="_blank">
                    Leer mas
                </a>
          </div>
        </div>
    </div>
  )
}

Cards.propTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource:PropTypes.string,
  text: PropTypes.string
}

export default Cards