import Image from "next/image";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListIcon from '@mui/icons-material/List';


const ItemsPage = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
        <Toolbar>
            <Image src="/bartrlogo.svg" alt="logo" width={300} height={100}/>
      
          <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.15)', marginLeft: 0, width: '100%' }}>
            <div style={{ padding: '8px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              style={{ color: 'inherit', padding: '8px 8px 8px 40px', width: '100%' }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <IconButton color="inherit" style={{ marginLeft: 'auto' }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" style={{ marginLeft: '8px' }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit" style={{ marginLeft: '8px' }}>
            <ListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* content */}
    </div>
  );
};

export default ItemsPage;