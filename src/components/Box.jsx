import React from 'react'
import { Card } from 'react-bootstrap'

const Box = (props) => {
    return (
        <>
            <Card border="dark">
                <Card.Header className="bg-dark text-whith">{props.title}</Card.Header>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </>
    )
}

export default Box