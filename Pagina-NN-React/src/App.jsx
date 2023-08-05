import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './componentes/Nav';
import Presentacion from './Secciones/Presentacion';
import Beneficios from './Secciones/Beneficios';
import PlantillaDestacada from './Secciones/PlantillaDestacada';

function App() {
    return (
        <>
            <header>
                {/* Navegador */}
                <Nav />
            </header>
            <main className='flex-shrink-0'>
                {/* Seccion de Presentacion */}
                <Presentacion />
                {/* Seccion de Beneficios */}
                <Beneficios />
                {/* Seccion de Plantillas Destacadas */}
                <PlantillaDestacada />
            </main>
        </>
    );
}

export default App;
