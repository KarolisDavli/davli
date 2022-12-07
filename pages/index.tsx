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

const ellipseVariants = {
  start: {
    d: [
      "M343.822 30.4899C393.822 60.0899 438.122 115.79 434.122 167.39C430.122 218.99 377.722 266.59 327.722 305.09C277.722 343.59 230.122 372.99 188.622 366.89C147.122 360.79 111.822 319.09 76.6217 280.59C41.5217 242.09 6.52171 206.79 0.821712 165.69C-4.77829 124.69 18.8217 78.0899 54.0217 48.3899C89.2217 18.6899 135.822 6.08988 187.022 1.58988C238.122 -2.91012 293.822 0.78989 343.822 30.4899Z",
      "M361.398 99.0894C401.998 137.589 447.998 172.889 465.698 225.989C483.398 278.989 472.798 349.689 432.098 381.389C391.398 413.089 320.698 405.689 264.798 390.789C208.998 375.989 167.998 353.689 118.998 321.989C69.9983 290.289 12.9983 249.289 1.99835 197.289C-8.90165 145.389 26.0984 82.3894 75.0984 43.8894C124.098 5.38939 187.098 -8.61063 236.198 5.18937C285.398 18.8894 320.698 60.5894 361.398 99.0894Z",
      "M318.369 104.335C358.869 154.335 388.269 205.935 397.469 266.735C406.669 327.535 395.669 397.535 355.169 443.035C314.669 488.535 244.669 509.535 175.469 508.735C106.269 507.935 37.969 485.235 12.969 439.735C-12.031 394.235 6.26902 325.935 9.26902 260.435C12.169 195.035 -0.230984 132.635 24.769 82.6347C49.769 32.6347 112.169 -4.96535 169.269 0.534651C226.269 5.93465 277.869 54.3347 318.369 104.335Z",
      "M394.606 12.1108C442.306 37.1108 466.906 107.811 450.506 162.111C434.106 216.411 376.706 254.411 329.106 281.711C281.406 309.111 243.406 325.811 190.306 341.011C137.106 356.211 68.8064 369.911 34.0064 342.511C-0.893623 315.211 -2.19362 246.911 1.30638 182.011C4.90638 117.211 13.3064 55.9108 48.1064 30.9108C82.9064 5.91078 144.206 17.2108 210.206 12.5108C276.206 7.81078 346.906 -12.8892 394.606 12.1108Z",
      "M418.748 22.9461C460.348 53.4461 478.648 118.446 471.948 176.846C465.248 235.146 433.548 286.746 391.848 312.646C350.148 338.446 298.548 338.546 244.948 340.546C191.348 342.546 135.648 346.446 85.648 320.646C35.648 294.846 -8.652 239.146 1.448 193.646C11.548 148.146 76.248 112.846 126.248 82.3461C176.248 51.8461 211.548 26.1461 261.748 11.3461C312.048 -3.55393 377.048 -7.55394 418.748 22.9461Z",
      "M324.091 85.3531C367.091 135.353 393.691 194.753 389.191 249.653C384.691 304.553 349.191 355.053 306.191 401.653C263.191 448.353 212.691 491.253 157.091 496.453C101.491 501.653 40.6905 469.153 15.6905 422.453C-9.30947 375.753 1.49053 314.953 7.99053 260.653C14.3905 206.353 16.5905 158.453 41.5905 108.453C66.5905 58.4531 114.491 6.35314 168.091 0.553139C221.691 -5.24686 281.091 35.3531 324.091 85.3531Z",
      "M313.054 23.1099C363.054 51.9099 403.354 111.61 403.254 171.11C403.154 230.61 362.554 290.01 312.554 315.21C262.554 340.31 203.154 331.31 152.554 322.41C102.054 313.61 60.3537 305.01 34.1537 279.81C7.95375 254.61 -2.64625 212.91 0.553748 174.41C3.75375 135.81 20.7537 100.51 46.8537 71.71C73.0537 42.81 108.354 20.5099 155.854 8.40995C203.354 -3.79005 263.054 -5.69006 313.054 23.1099Z",
      "M376.083 15.2148C401.083 42.9148 380.383 113.615 376.583 180.515C372.883 247.515 385.983 310.615 360.983 354.315C335.983 398.015 272.883 422.115 206.783 425.115C140.583 428.015 71.5834 409.815 34.5834 366.115C-2.41659 322.415 -7.41658 253.415 8.68342 200.315C24.6834 147.315 61.6834 110.315 98.6834 82.6148C135.683 55.0148 172.683 36.6148 226.583 19.8148C280.383 2.91484 351.083 -12.4852 376.083 15.2148Z",
      "M365.987 41.9184C401.187 80.6184 400.787 151.318 383.087 204.318C365.387 257.418 330.387 292.718 295.287 333.918C260.087 375.018 224.787 422.018 177.987 433.518C131.187 444.918 72.9869 420.818 40.5869 379.618C8.2869 338.418 1.78689 280.218 0.286893 220.518C-1.21311 160.718 2.1869 99.4184 34.4869 60.8184C66.7869 22.1184 128.087 6.11842 194.087 1.31842C260.087 -3.38158 330.787 3.21841 365.987 41.9184Z",
      "M379.2 50.5039C405.6 84.5039 407.1 135.704 415.6 195.304C424.1 254.904 439.5 323.004 413.2 348.004C386.8 373.004 318.7 354.904 259.3 346.204C199.9 337.504 149.2 338.204 99.2002 313.204C49.2002 288.204 -0.0998481 237.504 0.000151872 186.904C0.200152 136.404 49.7002 85.904 99.7002 51.904C149.7 17.904 200.2 0.403947 251 0.0039473C301.7 -0.296053 352.9 16.5039 379.2 50.5039Z",
    ],
  },
};

const array = ["1", "2", "3"];

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
      <Box
        height="100vh"
        // backgroundImage="linear-gradient(to right, #74ebd5 0%, #9face6 100%);"
      >
        <Container maxW="container.md">
          <Box
            display="flex"
            alignItems="center"
            height="70vh"
            justifyContent="center"
            flexDir={{base: "column", md: "row"}}
            gap={{base: "4rem", md: "0"}}
            pt={{base: "5rem", md: 0}}
          >
            {/* <Box position="absolute" top="0" right="0" zIndex="-99">
              <Image src="/Group.svg" alt="blob" />
            </Box> */}
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
                    My name is Karolis. I design & build awesome web projects
                    for startups or anyone who needs an online presence.
                  </Text>
                </motion.div>
              </motion.div>
            </VStack>
            <Box mt={{base: "0", md: "5"}}>
              <motion.svg
                animate="start"
                width="380px"
                height="380px"
                viewBox="0 0 480 533"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={ellipseVariants}
                  transition={{
                    duration: 16,
                    yoyo: Infinity,
                    repeat: Infinity,
                  }}
                  fill="#ff8282"
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
      </Box>

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
