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
      <Meta title="Davli / Aloe" />
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
              <Box textStyle="h1">Aloe Beauty Store</Box>
              <Text maxW="600px">
                Aloe is a small company producing natural body care products
                infused with the aloe plant. I was responsible for designing
                landing and product pages and developing a landing page for
                their brand. The main goal of a website is to drive users to use
                e-shop, as well as get to know the company and register for a
                newsletter.
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
                  <Text>Adobe XD</Text>
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
        a
        p="1rem"
        mt={{base: "10", md: "20"}}
      >
        <video width="1150" autoPlay loop playsInline>
          <source src="/projects/aloe/aloelanding.mp4" type="video/mp4" />
        </video>
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
              <Box textStyle="h2">Home Page</Box>
              <Text>
                A brand new landing page for a small shop. Making
                visitor-to-conversions possible.
              </Text>
            </VStack>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/aloe/aloewhole.jpg"
                alt="Sanjow project image"
              />
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/**Ckeckout video */}
      <Container maxW="container.lg" mt={{base: "10", md: "20"}}>
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
        >
          <Box display="flex" justifyContent="center" mt="20">
            <video playsInline width="1150" autoPlay loop>
              <source src="/projects/aloe/checkout.mp4" type="video/mp4" />
            </video>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
