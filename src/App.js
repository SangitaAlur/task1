import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Tasks/Footer';
import Login from './Components/Tasks/Login';
import Home from './Components/Tasks/Home';
import HeaderNavbar from './Components/Tasks/HeaderNavbar';


function App() {
  return (
    <div className="App">
     <HeaderNavbar/>
      <div style={{paddingTop:'40px', paddingBottom:'70px'}}> 
       <Routes>
         <Route path='/Home' Component={Home}/>
         <Route path='/login' Component={Login}/>
       </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
