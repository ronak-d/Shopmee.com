import React, { useEffect } from 'react'
import {Box} from "@chakra-ui/react";
import { FilterComponent } from '../Components/FilterComponent';
import { fetchdata } from '../Redux/products/action';


export const ProductPage = () => {

  const products = useSelector((store) =>store.ecommerceData.products)

  useEffect(()=>{
    if(products?.length === 0){
      dispatch(fetchdata())
    }
  },[dispatch, products?.length])

  return (
    <Box>
        <Box>
            <FilterComponent/>
        </Box>
        <Box>
            {/* products */}
        </Box>
    </Box>
  )
}
