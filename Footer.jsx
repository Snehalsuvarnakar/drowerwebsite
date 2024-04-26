import { Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <Box bgColor={"black"} minH={"40"} color={"white"}>

        <Stack direction={['column','row']}>
        <VStack alignItems={"stretch"}  w={'full'}  px={'4'}>
            <Heading size={"md"} textTransform={"uppercase"}>Logo</Heading>
            <HStack borderBottom={"2px solid white"} py="2">
                <Input placeholder='Enter  email here' border={"none"} borderRadius={"none"}
                outline={"none"}
                focusBorderColor='none'>

                </Input>
                <Button p={'0'}
                colorScheme='purple'
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                ></Button>
            </HStack>
        </VStack>
        <VStack w={'full'}
       borderLeft={['none','1px solid white']}
       borderRight={['none','1px solid white']} >
        <Heading textTransform={'uppercase'}
        size={'md'} textAlign={'center'}>
          Snehal Suvarnakar
        </Heading>
        <Text borderBottom={'1px solid white'}>All rights reserved</Text>          
               </VStack>

               <VStack w={'full'} size={'md'}              
                 >

                  <Heading >Join us here</Heading>
                <Button variant={'link'}  colorScheme='red'>
                  <a href="https://youtube.com">Youtube</a>
                </Button>

                <Button variant={'link'}  colorScheme='purple'>
                  <a href="https://Facebook.com">Facebook</a>
                </Button>

                <Button variant={'link'} colorScheme='blue'>
                  <a href="https://linkedin.com">Linkedin</a>
                </Button>
                </VStack>
        </Stack>
    </Box>
  )
}

export default Footer