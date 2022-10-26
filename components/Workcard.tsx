import {Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";

export default function Workcard(props) {
  return (
    <>
      <Box display="flex" flexDir="column" gap="32px">
        <Link href={props.href}>
          <a>
            <Image src={props.src} alt={props.alt} />
          </a>
        </Link>
        <Box display="flex" flexDir="column" gap="">
          <Text textStyle="role">{props.role}</Text>
          <Text textStyle="h2">{props.title}</Text>
          <Text>{props.desc}</Text>
        </Box>
      </Box>
    </>
  );
}
