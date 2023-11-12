import styled from 'styled-components'
import Form from './components/Form';
import './Global.css'
import { GrValidate} from "react-icons/gr"

function App() {
  return (
    <Main >
        
        <div className='h1_div'>
           <h1> <GrValidate /> FORM VALIDATION </h1>
        </div>
        <Div>

          <Form></Form>
          
        </Div>
    </Main>
  );
}

export default App;

const Main=styled.main`

.h1_div{
  display: flex;
  justify-content: center;
  
  

 h1{
  margin-top: 10px;
  margin-bottom:0px;
  font-weight: 900;
  font-size: 50px;

  @media (max-width:768px) {
         font-size: 50px;
  }
  @media (max-width:500px) {
         font-size: 30px;
         margin: 5px 0px 0px;
  }
 
 }

}
/* border: 1px solid red; */
`;

const Div=styled.div`

`;