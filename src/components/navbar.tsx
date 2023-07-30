// components/Navbar.tsx

import React, { useEffect } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useRouter } from 'next/router';
import { red } from '@mui/material/colors';

interface NavbarElement {
  href: string;
  text: string;
}


function navbarElements() {
    return [
      { 'href': '/generate', 'text': 'About Us' },
      { 'href': '/login', 'text': 'Get Involved' },
      { 'href': '/register', 'text': 'Events' },
      { 'href': '/register', 'text': 'Guides' },
      { 'href': '/register', 'text': 'Board' },
      { 'href': '/register', 'text': 'Contact' },
    ];
}

const NavbarButton = ({ href, text }: NavbarElement) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      {
        pathname: href,
      },
    );
  };



  return (
    <Button onClick={handleSubmit} color="inherit" key={text}>{text}</Button>
  );
}


const Navbar = () => {

  return (
    <AppBar position="static" sx={{background:'#c14747'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Button color={"inherit"}>Home</Button>
          </Link>
        </Typography>
        <Box color={'white'}>
          {navbarElements().map((element) => NavbarButton(element))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
