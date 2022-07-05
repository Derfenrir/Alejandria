import React from 'react'
import Cards from './Cards'


import boku1 from '../Imagenes/boku.jpg'
import magia1 from '../Imagenes/magia.jpg'
import muerto1 from '../Imagenes/muerto.jpg'
import image1 from '../Imagenes/image1.jpg'


const cards = [
  {
    id: 1,
    title: 'Boku No hero',
    image: boku1,
    url: 'https://lectortmo.com/library/manga/127/boku-no-hero-academia',
    text: 'Este es un buen manga'

  },
  {
    id: 2,
    title: 'Magia',
    image: magia1,
    url: 'https://lectortmo.com/library/manhwa/41571/a-returners-magic-should-be-special',
    text: 'Algo ira aqui, mas adelante por ahora no'
  },
  {
    id:3,
    title: 'Death',
    image: muerto1,
    url:'https://lectortmo.com/library/manga/41746/mieruko-chan',
    text: 'Descripcion pendiente'
  },

  {
    id:4,
    title: 'tensei shitara dai nana',
    image: image1,
    url:'https://lectortmo.com/library/manga/12223/tensei-shitara-slime-datta-ken',
    text: 'Reencarnacion'
  }
]


const Inicio = () => {
  return (
  
    <div className="container d-flex justify-content-center align-items-center  h-75 ">
      <div className="row">
        {
            cards.map((card) => (
              <div className="col-md-3" key={card.id}>
            <Cards title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
          </div>
          ))
        }
     

    </div>
    </div>

    
  )
}

export default Inicio