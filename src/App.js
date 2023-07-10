import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Stack } from '@mui/material';
import ShowCase from './pages/ShowCase';
import Resume from './pages/Resume';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import options from './tsconfig/options';
import DrawerAppBar from './pages/Drawer';
import AboutMe from './pages/AboutMe';

function App() {
  const [theme, setTheme] = useState('light');
  const Theme = createTheme({
    typography: {
      h2: {
        fontWeight: 700,
        color: theme === 'light' ? '#9155FD' : '#fff',
      },
      h5: {
        fontWeight: 600,
        color: theme === 'light' ? '#9155FD' : '#fff',
      },
      h6: {
        fontWeight: 600,

      },
      body1: {
        fontWeight: 400,
      },
      fontFamily: [
        'Lato', 'sans-serif',
      ].join(','),
    },
    palette: {
      background: {
        default: theme === 'light' ? '#F4F5FA' : '#28243D',
        paper: theme === 'light' ? '#fff' : '#1F1A3D',
      },
      primary: {
        light: '#e3f2fd',
        main: '#9155FD',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#e3f2fd',
        main: '#f50057',
        dark: '#ba000d',
        contrastText: '#000',
      },
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

      <DrawerAppBar>
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
        <Stack>
          <Home />
          <Resume />
          <ShowCase />
          <AboutMe />
          <ContactMe />
        </Stack>
        <Fab
          aria-label="LightMode"
          onClick={lightHandler}
          sx={{

            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <LightModeIcon />
        </Fab>
      </DrawerAppBar>

    </ThemeProvider>

  );
}

export default App;
