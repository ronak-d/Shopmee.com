import React from 'react'
import {Box, VStack} from '@chakra-ui/react';

export const FilterComponent = () => {
  return (
    <Box>
      <Box>
        <Text>Filters</Text>
        <Text>Cateogary</Text>

        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']} onChange={categoryHandler}>
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
