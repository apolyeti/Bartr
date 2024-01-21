"use client"
import Image from "next/image";
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Button} from "@nextui-org/react";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NextAuth from "next-auth/";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { styled, alpha } from '@mui/material/styles';
import NextLink from "next/link";
import { Icon, IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import prisma from "@/utils/db";

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

// model User {
//     id    Int     @id @default(autoincrement())
//     email String  @unique
//     name  String
//     posts Post[]
//     location String
// }
export default function NavBar() {
    const { data: session } = useSession();
  // check if user exists through their email
    // if not, create user
    // if yes, do nothing
    // find user by email
    // if not found, create user
    // if found, dont do anything

    useEffect(() => {
        console.log(session)
        const createUser = async () => {
            if (session && session.user?.email && session.user?.name) {
                const reqBody = {
                    email: session.user.email,
                    name: session.user.name,
                    location: "College 10"
                }
                const response = await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    //credentials: "include",
                    body: JSON.stringify(reqBody),
                });

                const data = await response.json();
            }
        }
        createUser();
    }
    , [session]);
    
    


    return (
        <div>
            <Stack direction="row" sx={{
                    alignItems: "center",
                    width: "100%", 
                    padding: "1rem",
                    marginRight: "10px",
                    justifyContent: "space-between",
                }}>

                {/* Bartr Logo (Left) */}
                <Box minWidth="400">
                    <NextLink href="/">
                        <Image
                            src="/bartrlogo2.svg"
                            alt="logo"
                            width={300} 
                            height={100} 
                        />
                    </NextLink>
                </Box>
                
                <Box minWidth="400">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>

                {/* Login and Sign Up Buttons (Right) */}
                <Box minWidth="400">
                    <Stack spacing={2} direction="row">
                            <NextLink href="/create/post">
                                <IconButton aria-label="create" style={{backgroundColor: '#FCFCFC', color: '#212121'}} > 
                                    <CreateIcon />
                                </IconButton>
                            </NextLink>
                            {(!session || !session.user) && 
                                <>
                                <NextLink onClick={() => signIn()} href="/">
                                    <Button 
                                        style={{backgroundColor: '#FCFCFC', color: '#212121'}}
                                        onClick={() => signIn()}
                                    >
                                        LOGIN
                                    </Button>
                                    <Button style={{backgroundColor: '#212121', color: '#FCFCFC'}}>
                                        SIGN UP
                                    </Button>
                                </NextLink>
                                </>
                            }
                            {session && session.user && 
                                <>
                                    <Button 
                                        style={{backgroundColor: '#FCFCFC', color: '#212121'}}
                                        onClick={() => signOut()}
                                    >
                                        log out
                                    </Button>
                                    <Button style={{backgroundColor: '#212121', color: '#FCFCFC'}}>
                                        {session.user.name}
                                    </Button>
                                </>
                            }
                    </Stack>
                </Box>


            </Stack>
        </div>
    );
}
