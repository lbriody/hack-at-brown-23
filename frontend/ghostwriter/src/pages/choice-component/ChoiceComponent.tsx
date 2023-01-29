import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react';

export default function ChoiceComponant({handleData}) {
  const [value, setValue] = React.useState('A')
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='A'>Choose A</Radio>
        <Radio value='B'>Choose B</Radio>
        <Radio value='C'>Choose C</Radio>
      </Stack>
    <Button 
      type="submit"
      onClick={() => {handleData(value)}}
    >
      Submit
    </Button>
    </RadioGroup>
  )
}
