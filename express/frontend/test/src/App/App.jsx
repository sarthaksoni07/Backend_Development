import { useEffect, useState } from 'react'

import Loading from '../../components/Loading'
import {Routes, Route } from "react-router";
import User from '../views/User'
import Home from '../views/Home';
import College from '../views/college';

function App() {
  return(
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/userinfo" element = {<User/>}/>
      <Route path="/collegeinfo" element = {<College/>}/>
    </Routes>
  )
}

export default App;
