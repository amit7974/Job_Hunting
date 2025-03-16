import './App.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'tabler-icons-react';


function App() {
  const theme = createTheme({
    colors: {
      'bright-sun':
        ['50', '#fffbeb', '100', '#fff3c6', '200', '#ffe588', '300', '#ffd149', '400', '#ffbd20', '500', '#f99b07', '600', '#dd7302', '700', '#b75006', '800', '#943c0c', '900', '#7a330d', '950', '#461902',],
      'mine-shaft':
        ['50', '#f7f7f7', '100', '#eaeaea', '200', '#cfcfcf', '300', '#b4b4b4', '400', '#9a9a9a', '500', '#808080', '600', '#666666', '700', '#4d4d4d', '800', '#333333', '900', '#1a1a1a', '950', '#000000',],


    },
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} />
        </Routes>

      </BrowserRouter>
      <HomePage />
    </MantineProvider>

  );
}

export default App;
