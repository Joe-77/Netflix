import React from 'react'
import Header from './Header'
import Routers from '../Routing/Routers'
import Footer from './Footer'
import { movies } from '../data/data'

const Layout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Routers/>
      <Footer/>
    </div>
  );
}

export default Layout