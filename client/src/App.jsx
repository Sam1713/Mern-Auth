// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Header from './components/Header';
function App() {
  return  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>

    <Route path='/profile' element={<Profile />}/>

    <Route path='/signup' element={<Signup />}/>

    <Route path='/signin' element={<Signin />}/>
    </Routes>

  </BrowserRouter>
}

export default App;
