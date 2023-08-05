import React from 'react'
import logo from '../imagenes/logos/blanco.png';
import '../css/Nav.css'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-morado">
            <div className="container px-5">
                <a className="navbar-brand" href="index.html"> <img src={logo} className='logo-NN' alt="logo-NN" /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="index.html">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">Acerca de</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Precios</a></li>
                        <li className="nav-item"><a className="nav-link" href="faq.html">Preguntas Frecuentes</a></li>
                        {/* Blog comentado para futuro feature donde daremos las noticias mas Actualizadas de nuestra web  */}
                        {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li> 
                        */}
                        <li className="nav-item"><a className="nav-link" href="portfolio-overview.html">Plantillas</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav