import { useState } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';


export default function Select_Number({seterror,error,selected_No,setselected_No}) {
    let arr=[1,2,3,4,5,6]
    

    const selected=(value)=>{
        setselected_No(value)
        seterror(' ')
    }

  return (
    <Main>
        <div className="error">
            {error}
        </div>
        <div className="boxes">
            {
                arr.map((i)=>{
                    return (
                        <Box isselected={i==selected_No? 1:0} key={i} onClick={()=>selected(i)}> {i}</Box>
                    )
                })
            }
        </div>
        <p>select a Number from one to six</p>

        <ButtonWrap >
            <Button className='btntext' variant="contained" onClick={()=>setselected_No(null)}>
            <RefreshIcon fontSize=""/> UnSelect 
            </Button>
        </ButtonWrap>
    </Main>
  )
}

const Main=styled.main`
/* border: 1px solid black; */
width: 670px;
min-height: 250px;

.error{
    text-align: center;
    height: 24px;
    color: red;
    font-size: 20px;
    margin-bottom: 7px;
}

.boxes{
    /* border: 1px solid red; */
    display: flex;
    gap: 18px;
    justify-content: center;
}
p{
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    margin-top: 10px ;
    margin-bottom: 0px;
}

`;

const Box=styled.div`
 width: 80px;
 height: 80px;
 border: ${({isselected})=>  isselected? '5px solid red':'5px solid blue'};
 display: grid;
 place-items: center;
 font-size: 34px;
 font-weight: 600;
 border-radius: 15px;
background-color: ${({isselected})=> isselected? 'blue':'white'};
color:${({isselected})=> isselected? 'white':'black'};
box-shadow: ${({isselected})=> isselected? "10px 8px 30px 3px black":"0px 0px 0px black"};

 &:hover{
   box-shadow: inset 5px 5px 18px black;
 }
`;


const ButtonWrap=styled.div`
text-align: center;
 .btntext{
    font-size: 20px;
    border-radius: 10px;
    

    &:hover{
    border: 5px solid red;
    border-radius: 10px;
    box-shadow: inset 5px 5px 18px black;
 }
 }

`;