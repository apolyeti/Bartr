"use client"
import Image from "next/image";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
<<<<<<< Updated upstream
import Box from '@mui/material/Box';
=======
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));
>>>>>>> Stashed changes


export default function NavBar() {
    return (
        <div>
            <Stack direction="row" sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%", // Set width to 100% to cover the screen width
                    padding: "1rem",
                    marginRight: "10px",
                }}>
                {/* Bartr Logo (Left) */}
                <Image
                    src="/bartrlogo.svg"
                    alt="logo"
                    width={360} 
                    height={120} 
                />
                {/* Login and Sign Up Buttons (Right) */}
                <Stack spacing={2} direction="row" sx={{ flex:1, justifyContent: "flex-end"}}>
                            <Button variant="contained" style={{backgroundColor: '#FCFCFC', color: '#212121'}}>
                                LOG IN
                            </Button>
                            <Button variant="outlined" style={{backgroundColor: '#212121', color: '#FCFCFC'}}>
                                SIGN UP
                            </Button>
                </Stack>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="search..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Stack>
        
            {/* AppBar with Dark Grey Color (Below the Logo) */}
            <AppBar position="static" style={{ backgroundColor: '#424242', height: '80px', padding: '5px'}}>
                <Stack direction="row" sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%", // Set width to 100% to cover the screen width
                }}>
                    <div>
                        <Box
                            sx={{
                                typography: 'header1',        
                                mx: 'auto',
                                fontWeight: 'bold',
                                fontSize: '45px', 
                                fontFamily: 'Helvetica', 
                                color: 'white',
                        }}>popular listings</Box>
                    </div>
                </Stack>
            </AppBar>
        </div>
    );
}
