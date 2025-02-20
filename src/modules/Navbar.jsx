import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Favorite } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const likeList = useSelector(state => state.likeList)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Button color="inherit" variant="outlined" size='large' startIcon={<Favorite/>}>{likeList?.length}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
