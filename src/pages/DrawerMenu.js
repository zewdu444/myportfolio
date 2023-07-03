import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useNavigate } from 'react-router-dom';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({ children }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          boxShadow: '1px',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            ZEWDU ANLEY
          </Typography>
          <Stack direction="row" spacing={1} sx={{ pr: '5px' }}>
            <IconButton
              aria-label="Github"
              sx={{
                color: 'white',
                size: 'large',
              }}
              onClick={() => { window.open('https://github.com/zewdu444', '_blank'); }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              sx={{
                color: 'white',
              }}
              onClick={() => { window.open('https://www.linkedin.com/in/zewdu-anley/', '_blank'); }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              sx={{
                color: 'white',
              }}
              onClick={() => { window.open('https://twitter.com/@zewdu444', '_blank'); }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              sx={{
                color: 'white',
              }}
              onClick={() => { window.open('https://wellfound.com/u/zewdu-erkyhun', '_blank'); }}
            >
              <FontAwesomeIcon icon={faHandPeace} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/'); }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/resume'); }}>
            <ListItemButton>
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/showcase'); }}>
            <ListItemButton>
              <ListItemIcon>
                <SlideshowIcon />
              </ListItemIcon>
              <ListItemText primary="ShowCase" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/contactme'); }}>
            <ListItemButton>
              <ListItemIcon>
                <ContactPageIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Me" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
