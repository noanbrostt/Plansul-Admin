import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react';

export default function HomePage() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box bg={bg} minH="100vh" p={6}>
      <Heading mb={4} color={textColor}>
        Bem-vindo ao Painel Administrativo
      </Heading>

      <Text fontSize="lg" mb={8} color={textColor}>
        Essa é a página inicial do sistema. Use a barra lateral para navegar entre os módulos.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Card bg={cardBg}>
          <CardBody>
            <Heading size="md" color={textColor}>Usuários</Heading>
            <Text mt={2} color={textColor}>Gerencie os usuários do sistema.</Text>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardBody>
            <Heading size="md" color={textColor}>Relatórios</Heading>
            <Text mt={2} color={textColor}>Visualize estatísticas e relatórios gerais.</Text>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardBody>
            <Heading size="md" color={textColor}>Configurações</Heading>
            <Text mt={2} color={textColor}>Ajuste preferências e parâmetros do sistema.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
