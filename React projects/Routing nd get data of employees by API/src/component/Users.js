import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'


export default function Users() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        async function data(){
            try {
                let response=await fetch('https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1')
                let data=await response.json();
                setdata(data)
                
            } catch (error) {
                console.log(error);
            }

        }
        data()
    },[])
    console.log(data);

  return (
    <Div>
        <h1> All Employees</h1>
        <hr />
      
        {
            data.map((i)=>{
                return (
                  
                   <div key={i.id} className='employee'>
                        <div><p>{i.id} .ID:-{i.id}</p></div>
                        <p>First-Name:- {i.firstName}</p>
                        <p>Last-Name:- {i.lastName}</p>
                        <div className='btn'>
                            <Link to={`/users/${i.id}`}><button> Get full Detail</button></Link>
                        </div>
                        <hr />
                    </div>
                    
                )
            })
        }
    </Div>
  )
}

const Div=styled.div`
/* border: 1px solid red; */
h1{
    font-size: 50px;
    text-align: center;
}

.employee{
    padding: 10px;
    p{
        font-size: 20px;
    }
}

.btn{

    button{
        border: 5px solid red;
        border-radius: 10px;
        padding: 10px;
        font-size: 20px;
        color: white;
        font-weight: 700;
        background-color:rgb(0, 204, 255) ;
        text-transform: capitalize;
        &:hover{
            background-color: rgb(0, 102, 128);
        }
    }
}

`;