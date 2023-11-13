import React from 'react'
import { NAvLink,NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Navbar() {
  return (
    <Div>
    <nav>
     <ul>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/users'}>All-Users-Data</NavLink></li>
       <li><NavLink to={'/about'}>About</NavLink></li>
       <li><NavLink to={'/contact'}>Contact-us</NavLink></li>
     </ul>
   </nav>
   </Div>
  )
}
const Div=styled.div`
text-align: center;
nav{
    display: flex;
    align-items: center;
    background-color: black;
    
    height: 50px;
    /* padding:10px 1px; */

    ul{
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
     gap: 20px;
     
     align-items: center;
    li{
      font-size: 20px;
      list-style: none;
      ;
    }
    a{
        color: white;
        text-decoration: none;
        &:hover{
          color: red;
        }
       
    }
  }

}
`;