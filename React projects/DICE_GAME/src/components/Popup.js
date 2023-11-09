import styled from "styled-components"



export default function Popup({hide}) {
  return (
    <Div>
        <h1>Gaming Rules</h1>
        <p>you need to select a number from given numbers from 1 to 6. Then you need to click on dice. If the number on dice is equal to your selected number. Your score will be increased by your selected number. if it is unequal then your score will be decreased by 2 points.  </p>
        <button onClick={()=>hide(false)}>Back To Game</button>
    </Div>
  )
}

const Div=styled.div`

 
position: absolute;
width: 750px;
height: 490px;
color: white;
background-color: rgb(0, 0, 0);
/* top: calc(50% - 200px);
left: calc(50% - 250px); */
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
z-index: 2;
border: 10px solid red ;
border-radius: 20px;
box-shadow:10px 10px 20px white;
h1{
    font-size: 50px;
}

p{ text-transform: capitalize;
    text-align: justify;
    padding: 17px;
}
button{
    border: 8px solid red;
    box-shadow: 5px 5px 10px white;
    width: 300px;
    height: 80px;
    font-size: 35px;
    font-weight: 700;
    border-radius: 20px;
}
`
