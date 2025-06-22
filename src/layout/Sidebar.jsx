import { Box, VStack, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Usuários', to: '/users' },
  { label: 'Relatórios', to: '/reports' },
];

export default function Sidebar() {
  const bg = useColorModeValue('gray.100', 'gray.800');
  const text = useColorModeValue('gray.800', 'white');
  const hover = useColorModeValue('gray.200', 'gray.700');
  const active = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box
      w="220px"
      bg={bg}
      color={text}
      h="100vh"
      p={4}
      position="sticky"
      top={0}
      borderRight="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Text fontSize="xl" mb={6} fontWeight="bold">
        Painel Admin
      </Text>

      <VStack spacing={4} align="stretch">
        {navItems.map((item) => (
          <Link
            as={NavLink}
            key={item.to}
            to={item.to}
            px={3}
            py={2}
            rounded="md"
            _hover={{ bg: hover }}
            _activeLink={{ bg: active, color: 'white' }}
          >
            {item.label}
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
