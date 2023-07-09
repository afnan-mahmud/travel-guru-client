import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import News from './Components/News';
import Destination from './Components/Destination';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { createContext, useState } from "react";

export const LoginUserContext = createContext()

function App() {
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <div className="App">
      <LoginUserContext.Provider value={{loggedUser , setLoggedUser}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/news' element={ <News /> } />
            <Route path='/destination' element={ <Destination /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <Signup /> } />
          </Routes>
        </Router>
      </LoginUserContext.Provider>
    </div>
  );
}

export default App;
