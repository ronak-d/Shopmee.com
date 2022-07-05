import React from 'react'
import {Routes, Route} from 'react-router-dom';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/women' element={<Womenpage/>}/>
      <Route path='/kids' element={<Kidspage/>}/>
      <Route path='/mens' element={<Menspage/>}/>
      <Route path='/shoes' element={<Shoespage/>}/>
      <Route path='/cart' element={<Cartpage/>}/>
    </Routes>
  )
}
