import {
  Container,
  VStack,
  Text,
  Box,
  Image,
  HStack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import Meta from "../components/Meta";
import FindHome from "../components/FindHome";

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
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

export default function About() {
  return (
    <>
      <Meta title="About — Karolis Davli" />
      <FindHome />

      <Container maxW="container.lg" py={{base: 12, md: 20}}>
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
          viewport={{once: true}}
        >
          <VStack spacing={10} align="center" textAlign="center">
            {/* Profile Image */}
            <Box position="relative">
              <Image
                src="/kar.jpeg"
                alt="Karolis Davli"
                objectPosition="50% 10%"
                borderRadius="full"
                boxSize={{base: "150px", md: "200px"}}
                objectFit="cover"
                boxShadow="0 8px 24px rgba(0,0,0,0.1)"
                mb={4}
              />
            </Box>

            {/* Headline */}
            <motion.div variants={childVariants}>
              <Text fontSize={{base: "3xl", md: "4xl"}} fontWeight="bold">
                Hello there! 👋 I’m Karolis Davli
              </Text>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={childVariants}>
              <Text
                fontSize={{base: "xl", md: "2xl"}}
                fontWeight="medium"
                color={useColorModeValue("gray.700", "gray.300")}
              >
                Creating meaningful experiences that accelerate growth
              </Text>
            </motion.div>

            {/* Bio */}
            <motion.div variants={childVariants}>
              <Text
                maxW="700px"
                fontSize={{base: "md", md: "lg"}}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                I’m a front-end developer focused on building scalable,
                responsive applications with <b>React</b> and <b>TypeScript</b>.
                Over the past year, I worked at TG Lab in Vilnius, contributing
                to high-performance <b>iGaming</b> web applications. I developed
                and maintained interfaces using React, TypeScript, NodeJS, and
                Styled-Components, integrated with RESTful APIs. I followed best
                practices including automated testing, code reviews, and
                responsive design implementation from Figma and Sketch mockups.
                I create well-structured, maintainable code and deliver features
                that integrate seamlessly with APIs while ensuring an
                exceptional user experience.
                <br />
                <br />
                Currently based in <b>Cyprus</b> 🇨🇾 I am open to opportunities
                where I can contribute to modern web applications and continue
                growing in front-end architecture.
              </Text>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={childVariants}>
              <HStack
                wrap="wrap"
                justify="center"
                spacing={4}
                rowGap={4}
                pt={6}
                maxW="600px"
              >
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Chakra UI",
                  "Styled Components",
                  "SASS",
                  "REST APIs",
                  "NodeJS",
                  "Figma",
                  "Git / GitHub",
                ].map((skill) => (
                  <Tag
                    key={skill}
                    size="lg"
                    colorScheme="teal"
                    borderRadius="full"
                    variant="subtle"
                  >
                    {skill}
                  </Tag>
                ))}
              </HStack>
            </motion.div>
          </VStack>
        </motion.div>
      </Container>
    </>
  );
}
