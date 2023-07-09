import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Stack, Tooltip } from '@mui/material';
import { zewdu } from '../img';

const drawerWidth = 240;

function DrawerAppBar({ ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontStyle: 'italic',

        }}
      >
        <Tooltip title="Open Home">
          <IconButton href="#home">
            <Avatar alt="Zewdu erkyhun" src={zewdu} />
          </IconButton>
        </Tooltip>
      </Typography>
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#resume">
            <ListItemText primary="Resume" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#showcase">
            <ListItemText primary="ShowCase" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#aboutme">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#contactme">
            <ListItemText primary="ContactMe" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Tooltip title="Open Home">
              <IconButton href="#home">
                <Avatar alt="Zewdu erkyhun" src={zewdu} />
              </IconButton>
            </Tooltip>
          </Typography>
          <Stack sx={{
            display: {
              xs: 'none',
              sm: 'flex',
              margin: 'auto',
            },
          }}
          >
            <List sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
            >

              <ListItem disablePadding>
                <ListItemButton component="a" href="#resume">
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#showcase">
                  <ListItemText primary="ShowCase" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#aboutme">
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#contactme">
                  <ListItemText primary="ContactMe" />
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              pr: '5px',
              marginLeft: {
                xs: 'auto',
                sm: '0px',
              },
            }}

          >
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
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        { props.children }
      </Box>
    </Box>
  );
}
export default DrawerAppBar;
