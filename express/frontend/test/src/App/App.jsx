import { useEffect, useState } from 'react'

import Loading from '../../components/Loading'
import {Routes, Route } from "react-router";
import User from '../views/User'
import Home from '../views/Home';


function App() {
  return(
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/userinfo" element = {<User/>}/>
    </Routes>
  )
}

export default App;
