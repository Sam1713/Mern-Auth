// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Header from './components/Header';
function App() {
  return  <BrowserRouter>
  <Header/>
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
