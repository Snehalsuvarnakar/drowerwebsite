import React from 'react'
import {Drawer, DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, Flex, HStack} from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

    const{isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
    <Button
    pos={"fixed"}
    zIndex={'overlay'}
    left={'4'}
    top={'4'}
    colorScheme='purple'
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen }

    >

        <BiMenuAltLeft size={"20"}/>
    </Button>

    <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
        <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>

                <DrawerHeader>Video Hub</DrawerHeader>   
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                      <Button variant={'ghost'} colorScheme={'purple'}>

                        <Link to={'/'}>Home</Link>
                      </Button>

                      <Button variant={'ghost'} colorScheme={'purple'}>

                        <Link to={'/videos'}>videos</Link>
                      </Button>

                      <Button variant={'ghost'} colorScheme={'purple'}>

                        <Link to={'/videos?category=free'}>Free videos</Link>
                      </Button>

                      <Button variant={'ghost'} colorScheme={'purple'}>

                        <Link to={'/upload'}>Upload videos</Link>
                      </Button>






                    </VStack>

                    <HStack pos={"absolute"} bottom={"10"} left={"5"}
                    
                    w={'full'}
                    justifyContent={'space-evenly'}>
                      <Button colorScheme={'purple'}>
                        <Link to={'/login'}>Log in </Link>
                      </Button>

                      <Button colorScheme={'purple'} variant={'outline'}>
                        <Link to={'/signup'}>sign Up </Link>
                      </Button>
                    </HStack>
                    </DrawerBody>    
                     </DrawerContent>


        

    </Drawer>
    </>
  )
}

export default Header