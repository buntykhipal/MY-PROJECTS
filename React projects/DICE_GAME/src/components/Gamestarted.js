import styled from 'styled-components';

import Total_Score from './Total_Score';
import Select_Number from './Select_Number';
import Rolldice from './Rolldice';
import { useState } from 'react';



export default function Gamestarted() {
    const [error,seterror]=useState(' ')
    const [score,setscore]=useState(0)
    const [selected_No ,setselected_No]=useState(null)
    const [currentdiceNO,setcurrentdiceNO]=useState(1)

    const generateRandomNo=(min,max)=>{
        return Math.floor(Math.random()*(max-min) + min)
    }

    const roll=()=>{
        if(selected_No){
        const random_no=generateRandomNo(1,7)
        setcurrentdiceNO(random_no)
       
        if(selected_No==random_no){
            setscore(score + selected_No)
        }
        else{
            setscore(score -2)
        }

        }
        else{
            seterror('please select a number ')
        }
    }

   


  return (

    <Main>

        <div className='header'>
            <Total_Score score={score}></Total_Score>        

            <Select_Number selected_No={selected_No} 
                setselected_No={setselected_No} 
                error={error}  seterror={seterror}>

            </Select_Number>
        </div>

        <div>
          <Rolldice currentdiceNO={currentdiceNO}  
            setcurrentdiceNO={setcurrentdiceNO} 
            roll={roll}>
          </Rolldice>
        </div>

    </Main>
  )
}

const Main=styled.main`


.header{
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;