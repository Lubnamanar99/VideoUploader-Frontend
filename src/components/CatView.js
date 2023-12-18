import React, { useEffect, useState } from 'react'

import Accordion from 'react-bootstrap/Accordion';
import { deleteCat,  getAllCat,  getVideo,  updateCategory } from '../services/allapis';
import { Trash2} from 'react-feather';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function CatView({updated}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Categories, SetCategories] = useState([])
  
  

  //get category
  const accessAllCategories = async () => {
    const result = await getAllCat()
    if (result.status >= 200 && result.status < 300) {

      SetCategories(result.data);

    }
  }
  //console.log(Categories);

  //delete category
  const removeCategory = async (id) => {
    const result = await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {
      accessAllCategories()
    }


  }

  












  useEffect(() => {
    accessAllCategories()
    
  }, [updated])

  //drag
  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragged over category.....");
  }

  const dropped = async (e, id) => {
    console.log("dropped...cat Id" + id);
    //to access videoid

    const videoId = e.dataTransfer.getData("cardId")
    console.log(videoId);

    //access video data from backend(get api)
    const { data } = await getVideo(videoId)
    console.log(data);

    //select dropped category from all catogories
    const selectedCategory = Categories.find(i => i.id == id)
    console.log(selectedCategory);

    //update category object with video data
    selectedCategory.videos.push(data)
    console.log(selectedCategory);

    //api call to update the changed category in backend
    await updateCategory(id, selectedCategory)
    accessAllCategories()


  }





  return (

    <div className='ms-5 rounded p-2  border bg-dark w-75 mt-3 '>

      


      <Accordion defaultActiveKey="0">
        {
          Categories.length > 0 ? (
            Categories.map(i => (


              <Accordion.Item eventKey="0"

                droppable
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => dropped(e, i.id)}


              >
                <Accordion.Header className="border-bottom border-3 border-primary ">
                  <h4>{i.name}</h4></Accordion.Header>
                <Accordion.Body >



                  {

                    i.videos.map(j => (
                      <div style={{ display: "flex" }}>
                        <img   style={{ height: "60px", width: "60px", padding: '5px' }} src={j.cover_img}>
                        </img>
                        <h6>{j.title}</h6>
                        
                      </div>



                    )


                    )
                  }


                  <button
                    className="btn mb-3 rounded w-100 bg-danger text-white"
                    onClick={() => removeCategory(i.id)}

                  >
                    Delete Category
                  </button>



                </Accordion.Body>
              </Accordion.Item>



            ))



          ) : <h5 className='text-white'>No Categories added!</h5>
        }



      </Accordion>

      


<ToastContainer></ToastContainer>
    </div>
  )
}

export default CatView