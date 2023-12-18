import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory } from '../services/allapis';

import { Accordion } from 'react-bootstrap';









function Categories({catupdate}) {

  const [show, setShow] = useState(false);
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  //state to hold input,id and video array

  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []
  })

  //function for addcategory onchange
  const SetCat=(e)=>{
   let {value,name}= e.target
   setCatInputs({...catInputs,[name]:value});
  
   

  }

  //function for add button
  const addData=async()=>{
    let id=uniqid()
    setCatInputs({...catInputs,["id"]:id})

    const {name}=catInputs
  if(name ==""){
    toast.error('please enter input', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  //api call
  else
  {
const result=await addCategory(catInputs)
if(result.status>=200 && result.status<300){
  setShow(false);
  catupdate(result.data)


  // console.log(result);
  toast.success(`${result.data.name} added`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}

  }

  }
  
 // console.log(catInputs);





 
  return (
    <div>
      <h1 className='text-white mt-1  text-center'>Categories</h1>

      <Accordion data-bs-theme="dark">
      <Button className='ms-5 rounded p-2 text-black w-75 mt-3 '  variant="light" onClick={handleShow}>
        <i class="fa-sharp fa-solid fa-plus"></i> Add Categories
      </Button>
       
      </Accordion>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <FloatingLabel className="mb-3  text-black  " label="Add Category">
            <Form.Control className='rounded' onChange={(e)=>SetCat(e)} name="name" 
              type="text"
              
              placeholder="Add Category"
            />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded border-0' variant="dark" onClick={handleClose}>
            <i class="fa-solid fa-xmark me-2"></i> Close
          </Button>
          <Button className='rounded border-0' variant="info" onClick={addData}>
            <i class="fa-sharp fa-solid fa-plus"></i> Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Categories