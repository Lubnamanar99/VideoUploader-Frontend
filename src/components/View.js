import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'



function View({updatedstate}) {

  const [allVideos,setAllVideos]=useState([])

  //state to update delete

  const [deleteUpdate,setDeleteUpdate]=useState({})



  const accessAllVideos=async()=>{
    const result=await getAllVideos()
    if(result.status>=200 && result.status<300){
      //console.log(result.data);
      setAllVideos(result.data)
    }
  }
console.log(allVideos);

useEffect(()=>{
  accessAllVideos()

},[updatedstate,deleteUpdate])


  return (
    <Row style={{backgroundColor:"gray"}} >
      {
        allVideos.length>0?(
          allVideos.map(i=>
           <Col lg={4} md={6} sm={6}> <VideoCard deleteFunc={setDeleteUpdate} video={i}/></Col>
            )
          
        ):<h4 className='text-black text-center'>No videos in your collection !</h4>
      }
      
      
     </Row>
  )
}

export default View