import React, { useState } from 'react'
import {Box, VStack} from '@chakra-ui/react';

export const FilterComponent = () => {

  const [categoryValue, setcategoryValue] = useState([]);

  const categoryHandler=(value)=>{
    console.log(value);
    setcategoryValue(value);
  }

  return (
    <Box>
      <Box>
        <Text>Filters</Text>
        <Text>Cateogary</Text>

        <CheckboxGroup colorScheme='green' defaultValue={categoryValue} onChange={categoryHandler}>
          <VStack>
            <Checkbox value="men's clothing">Men's clothing</Checkbox>
            <Checkbox value="women's clothing">Women's clothing</Checkbox>
            <Checkbox value="kid's clothing">Kid's clothing</Checkbox>
            <Checkbox value="shoes">shoes</Checkbox>
          </VStack>
        </CheckboxGroup>

        <Text></Text>

      </Box>
    </Box>
  )
}
