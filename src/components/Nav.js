import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersistentDrawerRight from './ShoppingCartSidebar';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartState } from '../contexts/Context';


const pages = ['Home', 'Shop'];

const ResponsiveAppBar = () => {

  const {
    state: {cart},
  } = CartState();

  console.log("Cart Length", cart)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [itemCount, setItemCount] = React.useState();

  React.useEffect(() => {
      setItemCount(cart.reduce((acc,curr) => acc+ curr.qty *1, 0))
  }, [cart]);
  
  let displayItemCount = itemCount;
  
  const ref = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img width="30px" src='./images/cookie-icon.svg' alt = "Uhh" id='cookie-logo' />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={{textDecoration: "none", color: "white"}} to="/Home">Bytes Box</Link>
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bytes Box
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open cart">
              <IconButton size= "large" onClick={() => {ref.current.handleDrawerOpen()}} sx={{ p: "3px" }}>
                <Badge badgeContent={(cart.length > 0) ? displayItemCount:"0"} color="success">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        < PersistentDrawerRight ref={ref} />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;