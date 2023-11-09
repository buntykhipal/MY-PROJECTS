import styled from 'styled-components'
import Start_game from './components/Start_game';
import './global.css'
import { useState } from 'react';
import Gamestarted from './components/Gamestarted';


export default function Dice_game() {
    const [isstarted,setisstart]=useState(false)
  return (
    <Main>
        
        {
            isstarted?  <Gamestarted/> :<Start_game setisstart={setisstart}/>
            
        }
       
    </Main>
  )
}

const Main=styled.main`
/* border: 1px solid red; */
min-height: 100vh;
`;
