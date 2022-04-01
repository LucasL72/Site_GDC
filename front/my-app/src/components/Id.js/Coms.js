import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Coms = () => {
    return (
        <div>
            <Container>
                <h3 className='text-center ssligne'>Commentaires</h3>
                <Row>
                    <Col md={12}>
                        <div className='coms'>
                            <cite>
                                <img src="../logoGDC.png" width="60" height="60" alt="img profile"></img>{' '}
                                truc
                            </cite>
                            <blockquote className='text-break'>
                                Message
                            </blockquote>
                            <p class="text-muted">Posté le </p>
                        </div>

                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Coms;