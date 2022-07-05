import React from 'react'
import {Routes, Route} from 'react-router-dom';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/women' element={<Womenpage/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/shoes' element={<Shoes/>}/>
    </Routes>
  )
}
