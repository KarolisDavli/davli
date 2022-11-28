import Meta from "../components/Meta";
import Workcard from "../components/Workcard";
import works from "./api/works/works";
import works2 from "./api/works/works2";

import {Container, VStack, Text, Box, Image} from "@chakra-ui/react";

import {motion} from "framer-motion";

const containerVariants = {
  init: {y: 150, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      delay: 0.1,
      duration: 0.1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

// const ellipseVariants = {
//   start: {
//     d: "M310.871 30.7921C328.271 65.6921 313.271 132.192 307.771 175.492C302.271 218.792 306.271 238.892 319.571 266.792C332.871 294.592 355.371 330.092 345.271 346.292C335.071 362.592 292.371 359.592 261.571 376.292C230.871 393.092 212.171 429.592 178.371 455.492C144.671 481.392 96.0714 496.692 61.0714 482.392C26.1714 467.992 4.97142 424.092 0.771418 381.892C-3.32858 339.792 9.47143 299.392 25.9714 268.592C42.3714 237.792 62.4714 216.392 76.8714 191.992C91.2714 167.592 100.071 140.192 118.571 105.892C137.071 71.4921 165.171 30.2921 204.271 11.3921C243.371 -7.50789 293.371 -4.1079 310.871 30.7921Z",
//   },
//   end: {
//     d: "M365.905 40.0572C398.405 69.7572 415.205 115.757 435.405 157.457C455.705 199.157 479.405 236.657 479.405 274.157C479.405 311.657 455.705 349.157 436.305 392.457C417.005 435.757 402.105 484.857 369.605 509.257C337.105 533.657 287.105 533.457 237.805 532.257C188.405 531.157 139.805 529.057 100.805 508.457C61.8052 487.757 32.5052 448.457 16.4052 406.257C0.205246 364.157 -2.79475 319.157 2.20525 277.057C7.30525 234.957 20.4052 195.857 39.1052 158.057C57.8052 120.157 81.9052 83.7572 115.805 54.8572C149.805 25.8572 193.405 4.55716 239.305 0.65716C285.305 -3.24284 333.405 10.2572 365.905 40.0572Z",
//   },
// };
const ellipseVariants = {
  start: {
    d: [
      "M310.871 30.7921C328.271 65.6921 313.271 132.192 307.771 175.492C302.271 218.792 306.271 238.892 319.571 266.792C332.871 294.592 355.371 330.092 345.271 346.292C335.071 362.592 292.371 359.592 261.571 376.292C230.871 393.092 212.171 429.592 178.371 455.492C144.671 481.392 96.0714 496.692 61.0714 482.392C26.1714 467.992 4.97142 424.092 0.771418 381.892C-3.32858 339.792 9.47143 299.392 25.9714 268.592C42.3714 237.792 62.4714 216.392 76.8714 191.992C91.2714 167.592 100.071 140.192 118.571 105.892C137.071 71.4921 165.171 30.2921 204.271 11.3921C243.371 -7.50789 293.371 -4.1079 310.871 30.7921Z",
      "M365.905 40.0572C398.405 69.7572 415.205 115.757 435.405 157.457C455.705 199.157 479.405 236.657 479.405 274.157C479.405 311.657 455.705 349.157 436.305 392.457C417.005 435.757 402.105 484.857 369.605 509.257C337.105 533.657 287.105 533.457 237.805 532.257C188.405 531.157 139.805 529.057 100.805 508.457C61.8052 487.757 32.5052 448.457 16.4052 406.257C0.205246 364.157 -2.79475 319.157 2.20525 277.057C7.30525 234.957 20.4052 195.857 39.1052 158.057C57.8052 120.157 81.9052 83.7572 115.805 54.8572C149.805 25.8572 193.405 4.55716 239.305 0.65716C285.305 -3.24284 333.405 10.2572 365.905 40.0572Z",
      "M289.343 115.303C305.643 148.303 313.643 172.003 327.643 193.203C341.743 214.403 361.943 233.103 363.443 252.803C364.943 272.403 347.843 292.903 337.343 320.303C326.843 347.703 322.943 382.103 305.243 411.703C287.443 441.303 255.843 466.103 229.443 456.803C203.143 447.603 182.143 404.303 154.843 380.203C127.543 356.103 94.0426 351.303 70.8426 333.103C47.6426 314.903 34.9426 283.403 21.5426 244.203C8.04262 204.903 -5.95737 157.903 2.64263 114.603C11.3426 71.303 42.7426 31.703 83.4426 12.903C124.143 -5.99703 174.143 -3.99702 211.343 18.003C248.643 40.103 273.143 82.403 289.343 115.303Z",
    ],
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

export default function Home() {
  function renderWorks(el) {
    return (
      <Box key={el.id}>
        <Workcard
          href={el.href}
          role={el.role}
          src={el.src}
          title={el.title}
          desc={el.desc}
        />
      </Box>
    );
  }

  return (
    <>
      {/**Hero */}
      <Meta title="Davli" />
      <Container maxW="container.md">
        <Box display="flex" alignItems="center" height="70vh">
          <VStack spacing="16px" alignItems="right">
            <motion.div
              variants={containerVariants}
              initial="init"
              animate="visible"
            >
              <Box textStyle="h1">Karolis Davli</Box>
              <motion.div variants={childVariants}>
                <Text textStyle="h2">UI Developer</Text>
              </motion.div>
              <motion.div variants={childVariants} transition={{delay: 0.2}}>
                <Text maxW="360px">
                  <Text as="i">
                    <span>Hey there! </span>
                  </Text>
                  My name is Karolis. I design & build awesome web projects for
                  startups or anyone who needs an online presence.
                </Text>
              </motion.div>
            </motion.div>
          </VStack>
          <Box width="900" height="600">
            <motion.svg
              animate="start"
              width="280"
              height="533"
              viewBox="0 0 480 533"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={ellipseVariants}
                transition={{
                  duration: 4,
                  yoyo: Infinity,
                  repeat: Infinity,
                }}
                fill="#5C63FE"
              />
            </motion.svg>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          overflow="hidden"
        >
          <motion.div
            initial={{y: -30}}
            animate={{y: 90}}
            transition={{
              ease: "easeIn",
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Image maxW="1.5rem" src="./arrowdown.svg" alt="arrow down" />
          </motion.div>

          <Text textStyle="featured">Featured Work</Text>
        </Box>
      </Container>

      {/**Works */}
      <Container maxW="container.lg" mt={{base: "0", md: "40"}}>
        <Box
          display="flex"
          w="100%"
          flexDir={{base: "column", sm: "column", md: "row"}}
          alignItems={{base: "center"}}
          gap={{base: "5rem", md: "2rem"}}
        >
          <Box display="flex" flexDir="column" gap="5rem" mt="20">
            {works.map(renderWorks)}
          </Box>
          <Box display="flex" flexDir="column" gap="5rem">
            {works2.map(renderWorks)}
          </Box>
        </Box>
      </Container>
    </>
  );
}
