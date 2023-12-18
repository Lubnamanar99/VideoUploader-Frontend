import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({update}) {

  //state to hold input data
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    cover_img:"",
    video_url: ""

  })

  //function for onChange
  const setValues = (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...inputs, [name]: value })

  }

  //function to extract videourl
  const extractUrl = (e) => {
    let videoUrl = e.target.value;
    //console.log(videoUrl);
    if (videoUrl.includes("be/"))  {
      

      let subUrl = videoUrl.split("be/")[1]  ;

      if (subUrl.length > 11) {
        subUrl = subUrl.split("?")[0];
        let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`; 
        let coverUrl = `https://img.youtube.com/vi/${subUrl}/hqdefault.jpg`;
        setInputs({ ...inputs,
          cover_img: coverUrl,
          ["video_url"]: finalUrl })
      } else {
        let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`;
        let coverUrl = `https://img.youtube.com/vi/${subUrl}/hqdefault.jpg`;
        
        
        setInputs({ ...inputs,
          cover_img: coverUrl,
          ["video_url"]: finalUrl })

        
      }
      
      
    }

  }
  //fuction for upload button
  const addHandle = async () => {
    let id = uniqid()
    // console.log(id);
    setInputs({ ...inputs, ["id"]: id })

    const {title,video_url}=inputs
    if(title=="" || video_url==""){
      toast.error('please fill all fields or invalid url', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }else{

      const result = await addVideo(inputs)
    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      
      //update state of home
      update(result.data)


      toast.success('Video Uploaded', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setShow(false)
    }

    }

    





  }

  console.log(inputs);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div><h1 className='text-white'> </h1>
      <Button className='ms-3 fs-5 rounded p-2 text-black mb-3' variant="light" onClick={handleShow}>
        <i class="fa-solid fa-upload"></i> Upload
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title >Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <FloatingLabel className="mb-3  text-black" label="Video Title">
            <Form.Control onChange={(e) => setValues(e)}
              name="title"
              className='rounded'
              type="text"

              placeholder="Video Title"
            />
          </FloatingLabel>

          

          <FloatingLabel
            className="mb-3 text-black"
            label="Video URL"
          >
            <Form.Control onChange={(e) => extractUrl(e)}
              name="video_url"
              className='rounded'
              type="text"
              placeholder="Video URL"

            />
          </FloatingLabel>



        </Modal.Body>
        <Modal.Footer className=' border' >
          <Button className='rounded border-0' variant="dark" onClick={handleClose}>
            <i class="fa-solid fa-xmark me-2"></i> Close
          </Button>
          <Button className='rounded border-0' variant="info" onClick={addHandle}>
            <i class="fa-solid fa-upload me-2"></i> Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>

  )
}

export default Add