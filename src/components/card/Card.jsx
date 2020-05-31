import React from 'react'

import { Col, Card } from 'react-bootstrap'

import Image from './Image'

export default (props) => {
    return (
        <Col xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex">
            <Card>
                <Image src={"/static/img/"+props.img} />
                <Card.Body style={{"padding": "5px 10px"}}>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text className="text-right">R$ 10,00</Card.Text>
                </Card.Footer>
            </Card>
        </Col>
    )
}