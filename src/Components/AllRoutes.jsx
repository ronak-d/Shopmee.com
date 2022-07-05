import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Cartpage } from '../Pages/Cartpage';
import { Homepage } from '../Pages/Homepage';
import { Kidspage } from '../Pages/Kidspage';
import { Menpage } from '../Pages/Menpage';
import { Shoespage } from '../Pages/Shoespage';
import { Womenpage } from '../Pages/Womenpage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/women' element={<Womenpage/>}/>
      <Route path='/kids' element={<Kidspage/>}/>
      <Route path='/mens' element={<Menpage/>}/>
      <Route path='/shoes' element={<Shoespage/>}/>
      <Route path='/cart' element={<Cartpage/>}/>
    </Routes>
  )
}
