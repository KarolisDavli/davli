import {Box, Image, Text} from "@chakra-ui/react";

export default function Workcard(props) {
  return (
    <>
      <Box display="flex" flexDir="column" gap="32px">
        <Image maxW="480px" maxH="480px" src={props.src} alt={props.alt} />
        <Box display="flex" flexDir="column" gap="">
          <Text textStyle="role">{props.role}</Text>
          <Text textStyle="h2">{props.title}</Text>
          <Text>{props.desc}</Text>
        </Box>
      </Box>
    </>
  );
}
