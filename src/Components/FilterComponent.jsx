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
            <Checkbox value='naruto'>Naruto</Checkbox>
            <Checkbox value='sasuke'>Sasuke</Checkbox>
            <Checkbox value='kakashi'>Kakashi</Checkbox>
          </VStack>
        </CheckboxGroup>

        <Text></Text>

      </Box>
    </Box>
  )
}
