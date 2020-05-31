import React from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalWindow = () => {
    const [show, setShow] = React.useState(false)
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Button variant="primary" onClick={handleShow}>Demo</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow
