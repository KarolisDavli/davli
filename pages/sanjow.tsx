import {Container, Box, VStack, Text, Image} from "@chakra-ui/react";
import Meta from "../components/Meta";
import FindHome from "../components/FindHome";

export default function Sanjow() {
  return (
    <>
      <Meta title="Davli / Sanjow" />
      <FindHome />
      {/**Hero */}
      <Container maxW="container.lg">
        <Box
          display="flex"
          gap={{base: "3rem", md: "6rem"}}
          flexDir={{base: "column", sm: "column", md: "row"}}
        >
          <VStack spacing="16px" alignItems="left">
            <Box textStyle="h1">Sanjow</Box>
            <Text maxW="600px">
              Tempor lobortis quis sit cum quisque. Platea tempus ullamcorper
              egestas quisque arcu auctor lacus. Egestas feugiat leo, sit
              mauris, ut. Est arcu justo aliquet enim adipiscing nulla.
              Convallis dui habitasse massa vulputate.
            </Text>
          </VStack>
          <VStack spacing="16px" alignItems="left">
            <Text textStyle="h2">Toolset</Text>
            <Box display="flex" flexWrap="wrap" gap="2.7rem" maxW="330px">
              <Text>NextJS</Text>
              <Text>ChakraUI</Text>
              <Text>Framer Motion</Text>
              <Text>Figma</Text>
            </Box>
          </VStack>
        </Box>
      </Container>
      {/**HeroImage */}
      <Box display="flex" justifyContent="center" p="1rem" mt="20">
        <Image
          borderRadius="1.5rem"
          src="/projects/sanjow/projectsan.jpg"
          alt="Sanjow project image"
        />
      </Box>
      {/**Detailed pages */}
      <Container maxW="container.lg" mt="20">
        <Box
          display="flex"
          flexDir={{base: "column", sm: "column", md: "row"}}
          alignItems="center"
          gap="20"
        >
          <VStack spacing="16px" alignItems="left" flexBasis="50%">
            <Box textStyle="h2">Sanjow careers page</Box>
            <Text>
              As Sanjow bussiness is growing fast it requires more work power.
              By beeing an excelent place to work Sanjow offers great enviroment
              for three-dimentional growth.
            </Text>
          </VStack>
          <Box display="flex" justifyContent="center">
            <Image
              borderRadius="1.5rem"
              src="/projects/sanjow/sanjow1.jpg"
              alt="Sanjow project image"
            />
          </Box>
        </Box>
      </Container>

      <Container maxW="container.lg" mt="20">
        <Box
          display="flex"
          flexDir={{base: "column-reverse", sm: "column-reverse", md: "row"}}
          alignItems="center"
          gap="20"
        >
          <Box display="flex" justifyContent="center">
            <Image
              borderRadius="1.5rem"
              src="/projects/sanjow/sanjow1.jpg"
              alt="Sanjow project image"
            />
          </Box>
          <VStack spacing="16px" alignItems="left" flexBasis="50%">
            <Box textStyle="h2">Sanjow careers page</Box>
            <Text>
              As Sanjow bussiness is growing fast it requires more work power.
              By beeing an excelent place to work Sanjow offers great enviroment
              for three-dimentional growth.
            </Text>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
