import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allapis';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';





function History() {

const [histories,setHistories]= useState([])

    const accessAllHistory=async()=>{
        const {data}=await getAllHistory()
        setHistories(data);
    }

    useEffect(()=>{
        accessAllHistory()
    },[])

   // console.log(histories);

   //delete history
   const removeHistory=async(id)=>{
    const result=await deleteHistory(id)
    if(result.status>=200 && result.status<300)  {
        accessAllHistory()

    }
   }


    
    return (
        
        <div 
        className="pt-5 mt-5 px-5  table-container  "
      style={{ minHeight: "100vh" }}
        >
            <h1 className='text-white text-center mt-5 p-2'>Watch History</h1>

          <Link to={'/home'}>
                <Button variant="secondary" className='mb-0 border rounded' >
            <i class="fa-solid fa-caret-left me-2"></i>Go Back
          </Button>
          </Link>

           {histories.length>0?(
            <Table  className={`mt-5  m-auto w-75 p-0`} 

                bordered
                 hover
                variant="dark"

            >
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Video Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='text-center '>
                    {histories?.map((i,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{i?.date}</td>
                        <td>{i?.video_title}</td>
                        <td>
                    <Trash2
                    onClick={()=>removeHistory(i?.id)}
                      
                      style={{ cursor: "pointer"  }}
                    /></td>
                        
                    </tr>

                    ))
                }
                    
                    
                </tbody>
            </Table>):
            <h4 className=' text-center bg-dark text-white p-5 mt-5'>No Watch Histories</h4>
            }
        </div>
    )
}

export default History