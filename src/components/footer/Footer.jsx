import React from 'react'

import './Footer.css'

export default () => {
    return (
        <footer className="border-top mt-3 bg-dark text-light">
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-4 col-12 text-center">
                        Siga-nos em nossas redes sociais e fique por dentro de nossas novidades e promoções:
                        <div className="logos p-2">
                            <a href="https://www.instagram.com/guilherminoburger_e_acai/" target="_blank" rel="noopener noreferrer">
                                <img src="/static/logos/instagram96.png" alt="Instagram Logo" />
                            </a>
                            <a href="https://www.facebook.com/GuilherminoBurger/" target="_blank" rel="noopener noreferrer">
                                <img src="/static/logos/facebook.png" alt="Facebook Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <strong>Horários de atendimento</strong><br />
                        * Quartas/Sábados, das 12h às 21h* <br />
                        * Domingos, das 12h às 19h* <br/>
                        <br/>
                        <small>*Somente retirada/delivery</small>
                    </div>
                    <div className="col-md-4">
                        <strong>Contato</strong><br />
                        Telefone: (11) 2498-2578
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-12 col-md text-center p-3">
                        <a href="https://facebook.com/leandroudala" className="text-light" target="_blank" rel="noopener noreferrer">&copy; {new Date().getFullYear()} | Desenvolvido por Leandro Udala</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}