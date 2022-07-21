import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navegacion/Navbar'
import Footer from './Componentes/Navegacion/Footer';
import Biblioteca from './Componentes/Paginas/Biblioteca'
import Inicio from './Componentes/Paginas/Inicio'
import Iniciar from './Componentes/Paginas/Iniciar'
import Registrar from './Componentes/Paginas/Registrar'
import Mostrar from './Componentes/Paginas/Mostrar';
import Rlibro from './Componentes/Paginas/Rlibro';
import Capitulo1 from './Componentes/Libros/capitulo1';
import Capitulo2 from './Componentes/Libros/Capitulo2';
import Capitulo3 from './Componentes/Libros/Capitulo3';

import Naruto from './Componentes/Libros/Naruto';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/biblioteca' element={<Biblioteca/>}/>
        <Route path='/iniciar' element={<Iniciar/>}/>
        <Route path='/registrar' element={<Registrar/>}/>
        <Route path='/mostrar' element={<Mostrar/>}/>
        <Route path='/rlibro' element={<Rlibro/>}/>
        <Route path='/naruto/:id' element={<Naruto/>}/>
        <Route path='/cap1' element={<Capitulo1/>}/>
        <Route path='/cap2' element={<Capitulo2/>}/>
        <Route path='/cap3' element={<Capitulo3/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
