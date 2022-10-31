import {Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const cardAnimation = {
  init: {opacity: 0, y: 200},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      delay: 0.3,
      duration: 0.9,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

function Section({children}) {
  const ref = useRef(null);

  return (
    <section
      style={{overflow: "hidden", borderRadius: "1rem 1rem 0 0"}}
      ref={ref}
    >
      {children}
    </section>
  );
}

export default function Workcard(props) {
  return (
    <>
      <Section>
        <motion.div
          variants={cardAnimation}
          initial="init"
          whileInView="visible"
        >
          <Box display="flex" flexDir="column" gap="32px">
            <motion.div
              whileHover={{scale: 0.98, shadow: "6px 6px 16px rgb(0, 0, 0)"}}
              transition={{duration: 0.2}}
            >
              <Box
                maxW="480px"
                maxH="480px"
                overflow="hidden"
                borderRadius="1rem"
              >
                <Link href={props.href}>
                  <a>
                    <motion.div
                      whileHover={{scale: 1.1, borderRadius: "1rem"}}
                      transition={{duration: 0.3}}
                    >
                      <Image src={props.src} alt={props.alt} />
                    </motion.div>
                  </a>
                </Link>
              </Box>
            </motion.div>
            <Box display="flex" flexDir="column" gap="">
              <Text textStyle="role">{props.role}</Text>
              <Text textStyle="h2">{props.title}</Text>
              <Text>{props.desc}</Text>
            </Box>
          </Box>
        </motion.div>
      </Section>
    </>
  );
}
