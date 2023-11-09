import styled from "styled-components";
import Button from '@mui/material/Button';
import { BiShow } from "react-icons/bi"
import { useState } from "react";
import Popup from "./Popup";



export default function Rolldice({roll,currentdiceNO,setcurrentdiceNO}) {

    const [ispopup,setispopup]=useState(false)

      
      
  return (
    <Main>
        <Mainwraper>
            <div className="img_box" onClick={roll}>
                <img src={`./img/dice/dice_${currentdiceNO}.png`} alt="" />
            </div>
            <p>
                click on the dice
            </p>

            <div className="btn">
                <Button className='btntext' variant="contained" onClick={()=>setispopup(true)} >
                    <BiShow fontSize={35} />
                    <span>Show Rules</span>
                </Button>
            </div>
             { ispopup ?  <div className="popup_div">
                             <Popup hide={setispopup}></Popup>
                         </div>  
            : ""  }            
            
            
        </Mainwraper>
    </Main>
  )
}

const Main=styled.main`
/* border: 1px solid black; */
margin-top: 50px;
text-align: center;
display: flex;
justify-content: center;
`;

const Mainwraper=styled.div`
    /* border: 1px solid red; */
    width: 250px;

    p{
        font-size: 25px;
        user-select: none;
        font-weight: 700;
        margin: 10px 0px;
    }

    .btn{
        /* border: 1px solid green; */
        margin: 1px 5px;

        .btntext{
            font-weight: 700;
            font-size: 20px;
            width: 100%;
            border-radius: 10px;
            user-select: none;
            &:hover{
                border: 5px solid red;
                border-radius: 10px;
                box-shadow: inset 5px 5px 18px black;
                
            }
        }
    }

    .popup_div{
        
        z-index: 1;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(10, 10, 10,0.9);
    }
`;
