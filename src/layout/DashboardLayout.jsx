import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {

  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Flex h="100vh" flexDirection="row">
      <Sidebar />
      <Box flex="1" bg={bg}>
        <Topbar />
        <Box p={6}>
          <Outlet /> {/* ← aqui entram as rotas como HomePage */}
        </Box>
      </Box>
    </Flex>
  );
}
