//import logo from './logo.svg';
import './App.css';
import './mystyle.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {Routes,Route} from 'react-router-dom';
import EmploeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmp from './components/UpdateEmp';
import EmployeeInfo from './components/EmployeeInfo';


function App() {
  return (
    <div className="Container">
      <div className='row bg-primary'>
        <Header></Header>
      </div>

      <div className='row'>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/Home" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/Logout" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/Employeelist" element={<EmploeeList></EmploeeList>}></Route>
          <Route path="/AddEmployee" element={<AddEmployee></AddEmployee>}></Route>
          <Route path='/updateEmp/:id' element={<UpdateEmp></UpdateEmp>}></Route>
          <Route path='/EmployeeInfo/:id' element={<EmployeeInfo></EmployeeInfo>}></Route>

        </Routes>
        {/* <Home isLoggedIn={false}/> */}
        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
      
    </div>
  );
}

export default App;
