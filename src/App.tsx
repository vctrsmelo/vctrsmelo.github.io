import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import ReactGA from 'react-ga4'
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

  useEffect(() => {
    ReactGA.initialize('G-V0SPGXMVYK')
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HashRouter>
          <Box      
            mt={4}
          >
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </Box>
        </HashRouter>
    </ThemeProvider>
  );
}

export default App;
