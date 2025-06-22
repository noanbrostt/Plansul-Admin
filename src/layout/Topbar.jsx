import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      as="header"
      bg={bg}
      px={6}
      py={4}
      shadow="sm"
      borderBottom="1px solid"
      borderColor={border}
      alignItems="center"
    >
      <Text fontWeight="bold" fontSize="lg">
        Dashboard
      </Text>
      <Spacer />
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Alternar tema"
      />
    </Flex>
  );
}
