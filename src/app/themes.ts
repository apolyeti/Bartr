"use client";
import {createTheme} from '@mui/material/styles';

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
          main: '#ffffff',
        },
        secondary: {
          main: '#edf2ff',
        },
      },
});

export default theme;