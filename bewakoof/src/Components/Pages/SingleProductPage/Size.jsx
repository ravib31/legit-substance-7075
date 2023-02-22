import { background, Box, Button } from '@chakra-ui/react'
import React from 'react'

const Size = ({children,handleSizeDetails}) => {
  return (
    <div>
        <Button onClick={handleSizeDetails} padding={"20px"} backgroundColor="white" border={"1px solid" } width="50px">{children}</Button>
    </div>
  )
}

export default Size