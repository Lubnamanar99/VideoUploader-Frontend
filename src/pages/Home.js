import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'
import CatView from '../components/CatView'








function Home() {



//state for state-lifting 
const [addUpdate,setAddUpdate]=useState({})
const [catUpdate,setCatUpdate]=useState({})

  return (
    <div className='mt-5'>
      <Row>
        <Col lg xs="12" className='mt-5'>
          <h3 className='text-white text-center mt-5 fs-1'><span>E</span>xplore, <span>C</span>reate, <span>C</span>onnect </h3>
    
          <div>
           <Link to={'/whistory'}> <Button  className='ms-5 rounded mb-3 mt-3 text-black' variant="light"><i class="fa-solid fa-clock"></i>  View Watch History</Button>{' '}</Link>
    
          </div>
        
        
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col lg={1} >
          <Add update={setAddUpdate}></Add>
        </Col>

        <Col lg={7}>
          <View updatedstate={addUpdate}></View>
        </Col>

        <Col lg={4}>
          <Categories catupdate={setCatUpdate}></Categories>
          <CatView updated={catUpdate} ></CatView>
        </Col>

      </Row>
    </div>
  )
}

export default Home