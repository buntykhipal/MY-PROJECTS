import styled from "styled-components";
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


export default function Start_game({setisstart}) {
  return (
    <Main>
       
        <Div>
              <h1>
                DICE GAME
              </h1>
            <Button className='btn' variant="contained" onClick={()=>setisstart(true)}>
            
                <PlayCircleFilledWhiteIcon fontSize=""/>
                PLAY GAME
            </Button>
        </Div>

         <div className="img_container">
            <img src="./img/dices.png" alt="" />
         </div>
      
    </Main>
  )
}

const Main=styled.main`
display: flex;
justify-content: space-around;


.img_container{
    /* border: 1px solid red; */
    width: 800px;
    height: 600px;
    /* margin: 0 auto; */

    img{
        /* border: 1px solid black; */
        width: 100%;
        height: 100%;
    }
}
`;


const Div=styled.div`
margin: auto auto;
/* border: 1px solid red; */
h1{
    font-weight: 900;
    font-size:100px;
    width: fit-content;
    /* border: 1px solid red; */

}

.btn{
    width: 100%;
    height: 80px;
    font-size: 55px;
    font-weight: 800;
 
}
`;