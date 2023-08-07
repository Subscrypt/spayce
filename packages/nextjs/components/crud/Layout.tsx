import React from "react";
import Header from "./Header";
import { Box, Center, Container } from "@chakra-ui/react";

interface IProps {
  title: string;
  backRoute?: string;
  children: React.ReactElement;
}

const Layout: React.FC<IProps> = ({ title, backRoute, children }) => {
  return (
    <Box height="100vh">
      <Header title={title} backRoute={backRoute} />
      <Container mt={4}>
        <Center>{children}</Center>
      </Container>
    </Box>
  );
};

export default Layout;
