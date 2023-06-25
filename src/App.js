import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import ShowCase from './pages/ShowCase';
import Resume from './pages/Resume';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import MiniDrawer from './pages/DrawerMenu';
import options from './tsconfig/options';

function App() {
  const [theme, setTheme] = useState('light');
  const Theme = createTheme({
    palette: {
      mode: theme,
    },
  });
  const lightHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await container.refresh();
  }, []);

  return (

    <ThemeProvider theme={Theme}>
      <BrowserRouter>

        <MiniDrawer>
          <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
          />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/showcase" element={<ShowCase />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>

          <Fab
            aria-label="LightMode"
            onClick={lightHandler}
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
            }}
          >
            <LightModeIcon />
          </Fab>
        </MiniDrawer>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
