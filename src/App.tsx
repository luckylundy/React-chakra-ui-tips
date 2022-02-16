import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Input,
} from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Button m={10} px={10} colorScheme="green" borderRadius="100%">
      Green button
    </Button>
    <Text fontSize="sm">Small Text</Text>
    <Text _hover={{ fontWeight: "bold" }}>Hover Me</Text>
    <Text
      color="blue.500"
      fontSize="sm"
      _hover={{ color: "red.500", fontSize: "xl" }}
    >
      Hover Me
    </Text>
    <Input
      placeholder="プレースホルダー"
      _placeholder={{ color: "purple.500" }}
    />
  </ChakraProvider>
);
