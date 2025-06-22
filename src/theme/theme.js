import { extendTheme } from '@chakra-ui/react';

// Configuração de cores padrão
const config = {
  initialColorMode: 'light', // ou 'dark'
  useSystemColorMode: true,  // respeita o tema do sistema operacional
};

const theme = extendTheme({ config });

export default theme;
