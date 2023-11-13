import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import styled from 'styled-components'


export default function Employeedetails() {
    const [data,setdata]=useState([])
    let  navigate=useNavigate()
    let {id:EmployeeId}=useParams()

    useEffect(()=>{
        async function data(){
            try {
                let response=await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${EmployeeId}`)
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
        {data.map((i)=>{
            return (<div  key={i.id} className='employeebox'>
                <h1> Full Detail of employee id number {i.id}</h1>
                 1{').'} ID={i.id}
                <div> <img src={`${i.imageUrl}`} alt="" /></div>
                <p>First-Name:- {i.firstName}</p>
                <p>Last-Name:- {i.lastName}</p>
                <p>Email-id:- {i.email}</p>
                <p>Age :- {i.age}</p>
                <p>Address:- {i.address}</p>
                <p>Contact Number:- {i.contactNumber}</p>
                <p>Date of Birth:- {i.dob}</p>
                <p>Salary:- {i.salary}</p>

            </div>)
        })}
        <div className='btn'>
        <button onClick={()=>navigate('/users')}>go to back all employee page</button> <br /> 
        <button onClick={()=>navigate('/')}>go to home page</button>
        </div>
    </Div>
  )
}

const Div=styled.div`
.employeebox{

    h1{
        text-align: center;
        font-size: 40px;
    }
    p{
        margin: 5px 5px;
        font-size: 20px;
    }
}
.btn{

    button{
        margin-top: 10px;
        border: 5px solid red;
        border-radius: 10px;
        padding: 10px;
        font-size: 18px;
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