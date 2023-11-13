import React from 'react'
import styled from 'styled-components';

export default function Blogs() {
  return (
    <Div>Blog page
        <div>articles-1</div>
        <div>articles-2</div>
        <div>articles-3</div>
        <div>articles-4</div>
        <div>articles-5</div>
    </Div>
  )
}
const Div=styled.div`
 div{
    height: 60px;
 }
 background-color: aqua;
 `;