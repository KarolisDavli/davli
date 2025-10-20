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
      <Meta title="Davli / Sanjow" />
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
              <Box textStyle="h1">
                Dynamic Wedding Website Builder (Next.js + Sanity)
              </Box>
              <Text maxW="600px">
                I built a wedding website system that transforms one flexible
                codebase into unique, personalized wedding pages for different
                couples. Using Next.js, Sanity, and Tailwind, it enables easy
                content management, live previews, and theme customization —
                blending visual storytelling with scalable engineering.
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
                <motion.div variants={childVariants} transition={{delay: 0.1}}>
                  <Text>NextJS</Text>
                </motion.div>
                <motion.div variants={childVariants} transition={{delay: 0.2}}>
                  <Text>NodeJS</Text>
                </motion.div>
                <motion.div variants={childVariants} transition={{delay: 0.4}}>
                  <Text>Figma</Text>
                </motion.div>

                <motion.div variants={childVariants} transition={{delay: 0.4}}>
                  <Text>TypeScript</Text>
                </motion.div>

                <motion.div variants={childVariants} transition={{delay: 0.4}}>
                  <Text>Sanity CMS</Text>
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
          src="/projects/wedding/md.jpg"
          alt="Wedding project image"
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
              <Box textStyle="h2">Dynamic by design</Box>
              <Text>
                Each wedding page is generated dynamically from Sanity CMS, with
                custom routing, theming, and live content previews. This
                approach allows each couple to have a unique site without
                duplicating code — scalable, maintainable, and ready to deploy
                instantly.
              </Text>
            </VStack>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/wedding/small.jpg"
                alt="Wedding project image"
              />
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Container maxW="container.lg" mt={{base: "10", md: "20"}}>
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
        >
          <Box
            display="flex"
            flexDir={{base: "column", md: "row"}}
            alignItems="flex-start"
            gap="20"
          >
            <Box display="flex" justifyContent="center" flexBasis="50%">
              <Image
                borderRadius="1.5rem"
                src="/projects/wedding/them.jpg"
                alt="Wedding system overview"
              />
            </Box>
            <VStack spacing="16px" alignItems="left" flexBasis="50%">
              <Box textStyle="h2">How It Works</Box>
              <Text>
                The system is powered by Next.js dynamic routing and Sanity CMS,
                allowing each wedding page to be created on-demand. API routes
                handle secure data fetching, including private content for each
                couple. Users can upload images, customize colors, and preview
                content live — all without redeploying. Tailwind ensures
                responsive styling, and the modular design keeps the codebase
                clean and maintainable.
              </Text>
              <Text>
                This project highlights my full-stack capabilities: combining
                frontend design, CMS integration, and server-side logic to
                deliver a smooth, dynamic user experience.
              </Text>
            </VStack>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
