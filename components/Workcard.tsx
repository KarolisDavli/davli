import {Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Workcard(props) {
  return (
    <>
      <Box display="flex" flexDir="column" gap="32px">
        <motion.div
          whileHover={{scale: 0.97, shadow: "6px 6px 16px rgb(0, 0, 0)"}}
          transition={{duration: 0.2}}
        >
          <Box maxW="480px" maxH="480px" overflow="hidden" borderRadius="1rem">
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
    </>
  );
}
