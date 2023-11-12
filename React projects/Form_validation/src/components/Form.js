import { useState } from 'react';
import styled from 'styled-components';
import { MdDoneOutline ,MdPassword} from "react-icons/md"
import { AiOutlineMail} from "react-icons/ai"
import { BsFillChatLeftTextFill} from "react-icons/bs"


export default function Form() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState({})
  const [data, setdata] = useState({})
  

console.log('Email should be in fixed format. \n(example aman45@gmail.com)');
  const validateform=()=>{
    let isvalid=true
    const newerror={}
    
    const is_name  = /^[^\d]+$/.test(name.trim())
    const is_email = /^[a-zA-Z0-9]+\@gmail.com$/.test(email.trim())
    const is_pass  = /^\S+$/.test(password.trim())

    if(!name){
      console.log('error nme');
     newerror.name='Name is mandatory.'
     isvalid=false
    }
    else if(!is_name){
     newerror.name='Number are not allowed to write in name.'
     isvalid =false;
    }
    if(!email){
      newerror.email='Email is required'
      isvalid=false;
    }
    else if(!is_email){
      newerror.email='Email should be in fixed format. \n(example aman45@gmail.com)'
      isvalid=false;
    }
    if(!password){
      newerror.password='Password is required'
      isvalid=false;
    }
    else if(!is_pass){
      newerror.password='Password must not have spaces'
    }
    else if(password.length<8){
      newerror.password='password must be more than 8 character';
    }
    seterror(newerror)
    return isvalid;
  }


  const submitform = (e) => {
    e.preventDefault();
    if(validateform()){
      const submitedData={
        name,
        email,
        password
      }
      setdata(submitedData)
      console.log(submitedData);
    }

  }

  return (
    <>
      <Main>
        <Main_form onSubmit={submitform}>

          <div className='input_div'>
           <label htmlFor="name"><BsFillChatLeftTextFill /> Name</label>
            <input type="text " id='name' 
            value={name} 
            onChange={(e)=>setname(e.target.value)} 
            placeholder='Name'
            />
            {error.name && <span className='error'>{error.name}</span>}
          </div>

          <div className='input_div'>
          <label htmlFor="email"><AiOutlineMail/> Email</label>
            <input type='email' id='name' 
            value={email} 
            onChange={(e)=>setemail(e.target.value)} 
            placeholder='Name'
            />
            {error.email && <span className='error'>{error.email}</span>}
          </div>

          <div className='input_div'>
          <label htmlFor="password"> <MdPassword/> Password</label>
            <input type="password"
             id='password' 
            value={password} 
            onChange={(e)=>setpassword(e.target.value)} 
            placeholder='password'
            />
            {error.password && <span className='error'>{error.password}</span>}
          </div>


          <SumbitBtn className='' >
            <button type='submit'> <MdDoneOutline/> Sumbit</button>
          </SumbitBtn>

        </Main_form>
        <div className='data_div'>
          <h1>Name :- {data.name || 'Bhupinder'}</h1>
          <h1>Email :- {data.email || 'buntykhipalj9595@gmail.com' }</h1>
          <h1>Password :- {data.password || 'NEWpassword123'}</h1>

        </div>
      </Main>
    </>
  )
}

const Main = styled.main`
border-top: 5px solid green;
display: flex;
gap: 20px;
padding: 10px;
@media (max-width:992px) {
      flex-direction:column;
      
}
@media (max-width:576px) {
      flex-direction:column;
      padding: 10px 0px;
}

.data_div{
  h1{
    font-size: 25px;
    @media (max-width:576px) {
        font-size: 16px;
    }
  }
}
`;

const Main_form = styled.form`

/* border: 1px solid black; */
width: 40%;
@media (max-width:992px) {
      width: 60%;
      margin: 10px auto;
}
@media (max-width:768px) {
      width: 80%;
      margin: 10px auto;
}
@media (max-width:576px) {
      width: 95%;
      margin: 10px auto;
      
}

.input_div{

  /* border: 1px solid red; */
  height:80px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width:576px) {
      
      margin: 10px 2px;
  
      
}
label{
  margin-bottom:5px;
}
  
  .error{
    color: red;
    
    font-size: 15px;
    @media (max-width:576px) {
        font-size: 12px;
      
}
  }
}


`;
const SumbitBtn = styled.div`
 margin: 10px;
 /* border: 1px solid red; */
 height: 40px;
 @media (max-width:576px) {
      
      margin: 10px 2px;
      
}
 
 button{
  font-size: 25px;
  border: 2px solid red;
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 10px ;
  &:hover{
    background-color: black;
    color: white;
    border-radius: 10px ;

  }
 }
`;