'use client'

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  ChakraProvider,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
} from '@chakra-ui/react';

const executives = [
  { name: 'Arjun Virk', role: 'Co-founder and CEO', description: 'Arjun Virk is the Co-founder and CEO of our company...' },
  { name: 'Hemit Patel', role: 'President and CTO', description: 'Hemit serves as the President and CTO, overseeing...' },
  { name: 'Christian Sz', role: 'Co-founder and CMO', description: 'Chiritan Sz is the Co-founder and CMO, responsible for...' },
  { name: 'Opemipo Odutan', role: 'COO', description: 'Opemipo is the COO, managing the day-to-day operations...' },
];

const directors = [
  { name: 'Arjun Virk', role: 'Interim Board Chair', description: 'Arjun Virk serves as the Board Chair, providing leadership and guidance...' },
  { name: 'Hemit', role: 'Board Chair-elect', description: 'Hemit is the Board Chair-elect, preparing to assume the role of Board Chair...' },
  { name: 'Vacant', role: 'Board Member', description: 'Director 1 contributes to the strategic decisions and vision of the company...' },
  { name: 'Vacant', role: 'Board Member', description: 'Director 2 brings expertise in a specific area and supports the company\'s goals...' },
  { name: 'Vacant', role: 'Board Member', description: 'Director 3 plays a key role in shaping the company\'s future direction...' },
];

const Page = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const openModal = (person: string) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <ChakraProvider>
      {/* Masthead */}
      <Center>
        <Heading marginBottom={3} marginTop={3}>
          About
        </Heading>
      </Center>
      <Box
        bg="blue.500"
        color="white"
        p="4"
        boxShadow="md"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          The Project
        </Text>
      </Box>
      <Center p={10} fontSize={'m'}>
        🌐 Welcome to Everyone Classroom, the cutting-edge educational platform brought to you by Everyone STEM! 🚀

        Embark on an immersive learning journey with our state-of-the-art classroom tool designed to deliver an unparalleled educational experience. Everyone Classroom is meticulously crafted to be the ultimate hub for our diverse range of courses, offering a seamless blend of innovation and pedagogical excellence.
      </Center>
      <Box
        bg="blue.500"
        color="white"
        p="4"
        boxShadow="md"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          The People
        </Text>
      </Box>

      {/* Core Executives Section */}
      <Box p={{ base: '4', md: '8' }} mx="auto" maxW="full">
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb="4">
          Core Executives
        </Text>
        <Flex wrap="wrap" justify="center" align="center">
          {executives.map((person) => (
            <Box
              key={person.name}
              textAlign="center"
              mb="8"
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => openModal(person.description)}
              flex="0 0 100%"
              maxWidth={{ base: 'auto', md: '25%' }}
            >
              <Text>{person.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {person.role}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Board of Directors Section */}
      <Box p={{ base: '4', md: '8' }} mx="auto" maxW="full">
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb="4">
          Board of Directors
        </Text>
        <Flex wrap="wrap" justify="center" align="center">
          {directors.map((person) => (
            <Box
              key={person.name}
              textAlign="center"
              mb="8"
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => openModal(person.description)}
              flex="0 0 100%"
              maxWidth={{ base: 'auto', md: '25%' }}
            >
              <Text>{person.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {person.role}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Description Modal */}
      <Modal isOpen={selectedPerson !== null} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedPerson}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Page;