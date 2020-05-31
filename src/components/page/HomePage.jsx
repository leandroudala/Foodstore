import React from 'react'

import { Jumbotron, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import "./HomePage.css"

export default () => {
    return (
        <>
            <Jumbotron className="bread-bg top-radius">
                <Container>
                    <div style={{textAlign: "center"}}>
                        <h3 style={{color: "#fff"}}>Guilhermino Burguer &amp; Açaí</h3>
                        <cite>O melhor hambúrguer artesanal está aqui!!</cite>
                        <div style={{fontSize: "20pt"}}>
                            <span role="img" aria-label="hamburguer">🍔</span>
                            <span role="img" aria-label="delicioso">😋</span>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Link to="/Cardapio" style={{color: "#fff", textDecoration:"underline"}}>Clique aqui e confira nossas opções!</Link>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron className="burguer-bg middle-radius" style={{color: "#fff"}}>
                <Container>
                    <h3 style={{color: "#fff"}}>Horários especiais durante a pandemia</h3>
                    <ul>
                        <li>Quartas/Sábados das 12:00 às 21:00*</li>
                        <li>Domingos das 12:00 às 19:00*</li>
                    </ul>
                    <small>*Somente retirada/delivery.</small>
                </Container>
            </Jumbotron>
            <Jumbotron className="bread-bg burguer bottom-radius" style={{color: "#fff"}}>
                <Container>
                    <h3>Venha conferir!</h3>
                    <p>
                        Estamos localizados na <a href="https://goo.gl/maps/gWzSojpQNcqA1z2CA" style={{textDecoration: "underline"}} className="burguer" target="_blank" rel="noopener noreferrer">Rua Mucugeo, 28 - Guarulhos</a>.
                    </p>
                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.295782766459!2d-46.42195458502433!3d-23.449792984738444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63d23cc125e7%3A0xcb134572c331bbbf!2sGuilhermino%20Burger%20e%20A%C3%A7a%C3%AD!5e0!3m2!1sen!2sbr!4v1590885006760!5m2!1sen!2sbr" 
                            frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Encontre-nos!"></iframe>
                    </div>
                </Container>
            </Jumbotron>
        </>
    )
}