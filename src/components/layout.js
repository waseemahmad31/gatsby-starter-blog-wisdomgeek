import React from 'react';
import Footer from './footer';
import Header from './header';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={pageStyles}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
