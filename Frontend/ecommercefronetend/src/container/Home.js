import {Jumbotron} from 'react-bootstrap'
import React from 'react'
import Header from '../component/Layout/Header'


/**
* @author
* @function 
**/

const Home = (props) => {
  return(
      <>
    <Header></Header>
    <Jumbotron  style={{margin :'5rem'} }className="text-center">
    <h1>Welcome to Admin Dashboard</h1>
    <h2>Welcome everyone</h2>
    <h3>lets check</h3>
    </Jumbotron>
    </>
   )

 }

export default Home;