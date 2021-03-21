import React, { useState } from 'react'
import Header from '../component/Layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
import Input from '../component/Layout/Input'
import {login} from '../action/index'
import {useDispatch} from 'react-redux'


const Signin = (props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const dispatch = useDispatch();
    const userlogin = (e)=>{

        
        e.preventDefault();
        const user = {
            email , 
            password
        }
        console.log(user);
        dispatch(login(user));
    
    }
    return (
        <>
            <Header></Header>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form onSubmit={userlogin}>
                          

                            <Input label="Email Address"
                                type="email"
                                placeholder="Enter your Email" 
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            <Input label="Password"
                                type="password"
                                placeholder="Enter password"
                                onChange={(e)=>setPassword(e.target.value)} />

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Signin;