import React from 'react'

import {Container} from 'react-bootstrap'

import products from '../../test/products'

import Categories from '../category/Categories'

export default () => {
    return (
        <Container fluid>
            {
                products.categories.map((i, j) => {
                    return (
                        <Categories {...i} key={j} />
                    )
                }
                )
            }
        </Container>
    )
}