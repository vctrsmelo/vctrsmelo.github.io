import React from 'react';
import Home from './pages/Home/Home';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Portfolio from './pages/Portfolio/Portfolio';
import BottomNavigationComponent from './components/Navbar/BottomNavigationComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HashRouter>
          <Box      
            mt={4}
          >
            <Routes>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
            <BottomNavigationComponent/>
          </Box>
        </HashRouter>
    </ThemeProvider>
  );
}

export default App;
