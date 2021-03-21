import React from 'react';
import Header from '../component/Layout/Header';
import { Container, Row, Col } from 'react-bootstrap'
import Input from '../component/Layout/Input'

/**
* @author
* @function 
**/

const Signup = (props) => {
    return (
        <>
            <Header></Header>
            <Container>

                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form>
                            <Row ><Col md={6}>
                                <Input label="First Name"
                                    type="text"
                                    placeholder="Enter firstname" />


                            </Col>
                                <Col md={6}>
                                    <Input label="Last Name"
                                        type="text"
                                        placeholder="Enter last name" />


                                </Col>

                            </Row>
                            <Input label="Email Address"
                                type="email"
                                placeholder="Enter your Email" />
                            <Input label="Password"
                                type="password"
                                placeholder="Enter password" />

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Signup;