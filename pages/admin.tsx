import {Container, Box, VStack, Text, Image} from "@chakra-ui/react";
import Meta from "../components/Meta";
import FindHome from "../components/FindHome";

import {motion} from "framer-motion";

const containerVariants = {
  init: {y: 60, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      delay: 0.3,
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0,
    },
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

export default function Sanjow() {
  return (
    <>
      <Meta title="Davli / Admin Solutions" />
      <FindHome />
      {/**Hero */}
      <Container maxW="container.lg">
        <Box
          display="flex"
          gap={{base: "3rem", md: "6rem"}}
          flexDir={{base: "column", sm: "column", md: "row"}}
        >
          <motion.div
            variants={containerVariants}
            initial="init"
            animate="visible"
          >
            <VStack spacing="16px" alignItems="left">
              <Box textStyle="h1">Admin Solutions</Box>
              <Text maxW="600px">
                Tempor lobortis quis sit cum quisque. Platea tempus ullamcorper
                egestas quisque arcu auctor lacus. Egestas feugiat leo, sit
                mauris, ut. Est arcu justo aliquet enim adipiscing nulla.
                Convallis dui habitasse massa vulputate.
              </Text>
            </VStack>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="init"
            animate="visible"
          >
            <VStack spacing="16px" alignItems="left">
              <Text textStyle="h2">Toolset</Text>
              <Box display="flex" flexWrap="wrap" gap="2.7rem" maxW="330px">
                <motion.div variants={childVariants} transition={{delay: 0.4}}>
                  <Text>Figma</Text>
                </motion.div>
              </Box>
            </VStack>
          </motion.div>
        </Box>
      </Container>
      {/**HeroImage */}
      <Box
        display="flex"
        justifyContent="center"
        p="1rem"
        mt={{base: "10", md: "20"}}
      >
        <Image
          borderRadius="1.5rem"
          src="/projects/admin/adminhero.jpg"
          alt="Sanjow project image"
        />
      </Box>
      {/**Detailed pages */}
      <Container maxW="container.lg" mt={{base: "10", md: "20"}}>
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
        >
          <Box
            display="flex"
            flexDir={{base: "column", sm: "column", md: "row"}}
            alignItems="center"
            gap="20"
          >
            <VStack spacing="16px" alignItems="left" flexBasis="50%">
              <Box textStyle="h2">Services & Pricing page</Box>
              <Text>
                As Admin Solutions bussiness is growing fast it requires more
                work power. By beeing an excelent place to work Admin Solutions
                offers great enviroment for three-dimentional growth.
              </Text>
            </VStack>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/admin/admin2.jpg"
                alt="Sanjow project image"
              />
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Container maxW="container.lg" mt="20">
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
        >
          <Box
            display="flex"
            flexDir={{base: "column-reverse", sm: "column-reverse", md: "row"}}
            alignItems="center"
            gap="20"
          >
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/admin/responsive.jpg"
                alt="Sanjow project image"
              />
            </Box>
            <VStack spacing="16px" alignItems="left" flexBasis="50%">
              <Box textStyle="h2">Full responsiveness</Box>
              <Text>
                Website is fully responsive and keeps it&apos;s looks on on
                different screen sizes
              </Text>
            </VStack>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
