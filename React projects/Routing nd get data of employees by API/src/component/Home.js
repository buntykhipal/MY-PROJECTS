import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


export default function Home() {

  
  return (
    <Div>
       <div>
        <h1>HOME PAGE</h1>
      </div>
    </Div>
  )
}

const Div=styled.div`
div{
  h1{
    font-size: 50px;
  }
}
`;