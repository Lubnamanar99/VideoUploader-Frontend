import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';






function VideoCard({ video, deleteFunc }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async () => {
        setShow(true);
        //body
        //id
        var id = uniqid()

        //title
        var video_title = video.title

        //date
        var date = format(new Date(), ' h:mm a dd-MM-yyyy')
        //console.log(date);
        const body = { id, date,video_title }
        if (body) {
            //api call
           const result= await addHistory(body)
           // console.log(result);

        }

    }

    //function for delete video
    const HandleDlete = async (id) => {
        const result = await deleteVideo(id)
        // console.log(result);
        if (result.status >= 200 && result.status < 300) {
            deleteFunc(result.data)
        }
    }

   //
   const dragStart=(e,id)=>{
    console.log("drag started...source card id"+id);
//store dragged data
e.dataTransfer.setData("cardId",id)
   } 

    return (
        <div>

            <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='border border-white rounded bg-black p-2 m-2 ms-3'
                style={{ width: '13rem', height: '330px' }}>
                <Card.Img className='border border-primary rounded' onClick={handleShow}
                    style={{ height: '250px', width: '100%' }}
                    variant="top" src={video.cover_img} />
                <Card.Body >
                    <Card.Title><h5 className='text-white fs-6 display-6 '>{video.title}
                    </h5>
                        <div className='text-end '>
                            <a href='' >
                                <Trash2 onClick={() => HandleDlete(video.id)} className='text-danger'></Trash2>
                            </a> </div>

                    </Card.Title>



                </Card.Body>
            </Card>

            {/*modalbox card image */}


            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-bg p-0" style={{ height: "500px" }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.video_url}
                        title={video.title}
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                    </iframe>



                </Modal.Body>
                <Modal.Footer className=' border'>
                    <button className="px-2 py-1 rounded border-0 bg-dark text-white" onClick={handleClose}>
                        <i class="fa-solid fa-xmark me-2"></i> Close
                    </button>
                </Modal.Footer>

            </Modal>

        </div>
    )
}

export default VideoCard