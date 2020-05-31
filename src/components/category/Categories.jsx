import React from 'react'

import { Row, Col } from 'react-bootstrap'

import Card from '../card/Card'

export default (category) => {
    return (
        <>
            <Row>
                <Col>
                    <h3>{category.name}</h3>
                </Col>
            </Row>
            <Row className="pb-3">
                {
                    category.list.map((prod, i) => {
                        return (
                            <Card key={i} {...prod}></Card>
                        )
                    })
                }
            </Row>
        </>
    )
}