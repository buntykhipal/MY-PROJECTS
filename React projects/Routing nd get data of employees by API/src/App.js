import {Routes,Route,Link} from 'react-router-dom'
import Home from './component/Home';
import Error from './component/Error';
import Users from './component/Users';
import Employeedetails from './component/Employeedetails';
import About from './component/About';
import Contact from './component/Contact';
import styled from 'styled-components';
import Navbar from './component/Navbar';
import './global.css'
import Blogs from './component/Blogs';

function App() {
  return (
    <div >
    <Navbar></Navbar>
     
  <Routes>

    <Route path='/' element={<Home></Home>} />
    <Route path='/about' element={<About></About>} >
      <Route path='blog' element={<Blogs></Blogs>}/>
    </Route>
    <Route path='/contact' element={<Contact></Contact>} />
 
    <Route path='/users' element={<Users></Users>}/>
      <Route path='/users/:id' element={<Employeedetails></Employeedetails>}/>
    
    <Route path='*' element={<Error></Error>}/>


  </Routes>

    </div>
  );
}

export default App;

