import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function About() {
    let navigate=useNavigate()
  return (
    <Div>
        About page
        <div className='blog'>
            <Link to={'blog'}>All Blogs</Link>
        </div>

        <Outlet></Outlet>
        <div className='btn'>
            <button onClick={()=>navigate('/')}>go to home</button>
        </div>
    </Div>
  )
}
const Div=styled.div`
text-align: center;
font-size: 60px;
.blog a{
  text-decoration: none;
}

button{
        margin-top: 10px;
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
`;