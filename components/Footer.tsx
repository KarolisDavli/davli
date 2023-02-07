import {Box, Container, Text, Link, Image} from "@chakra-ui/react";

import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const bgAnimation = {
  init: {opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      duration: 0.9,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

function Section({children}) {
  const ref = useRef(null);

  return <section ref={ref}>{children}</section>;
}

export default function Footer() {
  return (
    <Section>
      <Box position="relative" mt="40">
        <motion.div
          variants={bgAnimation}
          initial="init"
          whileInView="visible"
          viewport={{amount: 0.1}}
        >
          <Box
            position="absolute"
            backgroundColor="black"
            height="400px"
            width="100%"
          ></Box>
        </motion.div>
        <Box position="absolute" width="100%" transform="translateY(50%)">
          <Container maxW="container.lg" color="white">
            <Box display="flex" flexDir="column" gap="3rem">
              <Box display="flex" flexDir="column" gap="1rem">
                <motion.div
                  variants={childVariants}
                  initial="init"
                  whileInView="visible"
                  transition={{delay: 0.2}}
                >
                  <Text textStyle="h2">Lets get started!</Text>
                  <Text textStyle={{base: "mobileh2", md: "h1"}}>
                    hello@karolisdavli.com
                  </Text>
                </motion.div>
              </Box>
              <motion.div
                variants={childVariants}
                initial="init"
                whileInView="visible"
                transition={{delay: 0.4}}
              >
                <Box display="flex" flexDir="column" gap="1rem">
                  <Text>You can also find me on:</Text>
                  <Box display="flex" gap="1rem">
                    <Link
                      href="https://dribbble.com/KarolisDavli"
                      target="_blank"
                    >
                      <Image src="/dribbble.svg" alt="dribble icon" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/otaikaipfaina/"
                      target="_blank"
                    >
                      <Image src="/instagram.svg" alt="instagram icon" />
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </Box>
    </Section>
  );
}
