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
// import MiniDrawer from './pages/DrawerMenu';
import options from './tsconfig/options';
import DrawerAppBar from './pages/Drawer';

function App() {
  const [theme, setTheme] = useState('dark');
  const Theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
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
