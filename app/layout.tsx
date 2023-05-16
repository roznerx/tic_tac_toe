"use client"
import Head from 'next/head';
import Header from './components/Header';
import '../styles/globals.css';
import React, { ReactNode } from 'react';
import localFont from 'next/font/local';
import { ThemeProvider, createTheme } from '@mui/material';

const myFont = localFont({
  src: '../public/font/8-bit_arcade_in-webfont.woff2',
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: ["8-bit_arcade_inmedium"].join(','),
  }
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" className={myFont.className}>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tic Tac Toe</title>
        <link rel="stylesheet" type="text/css" href="../styles/globals.css" charSet="utf-8" />
        <script type="text/javascript" src="tictactoe.js" async></script>
      </Head>
        <ThemeProvider theme={theme}>
        <body>
          <Header />
          {children}
        </body>
        </ThemeProvider>
      </html>
  )
};
