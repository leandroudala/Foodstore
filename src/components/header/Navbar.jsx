import React from 'react'

import { Link } from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap'


export default () => {
    const [expanded, setExpanded] = React.useState(false)
    const isExpanded = () => {
        setExpanded(expanded ? false : "expanded")
    }
    const closeExpanded = () => {
        setExpanded(false)
    }
    // link component
    const A = (props) => {
        return (
            <Link className="nav-link" onClick={closeExpanded} {...props}>{props.children}</Link>
        )
    }
    return (
        <Navbar bg="light" fixed="top" variant="light" expand="lg" expanded={expanded}>
            <A to="/" className="navbar-brand">
                <img src="/logo192.png" alt="logo" width="30"/>
                {' '}
                <div style={{marginLeft: "35px", marginTop: "-25px", textAlign:"center"}}>
                    <strong style={{display: "block", lineHeight: "5pt"}} className="brown">Guilhermino</strong>
                    <strong style={{fontSize: "10pt", lineHeight: "5pt"}}>BURGUER &amp; AÇAÍ</strong>
                </div>
            </A>
            <Navbar.Toggle onClick={isExpanded} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <A to="/">Home</A>
                    <A to="/Cardapio">Cardápio</A>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}