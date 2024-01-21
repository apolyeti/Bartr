"use client";
import {createTheme} from '@mui/material/styles';
import './font.css';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
}

const theme = createTheme({
    palette: {
        primary: {
          main: '#82AF81',
        },
        secondary: {
          main: '#ACACAC',
        },
      },
typography: {
    fontFamily: 'Druk Wide Web Super Regular',
      },
});

export default theme;