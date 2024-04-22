import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import BlogHero from './components/BlogHero'; // Corrected import
import Blog from './components/Blog';

function App() {
  return (
    <>
      <Navbar />
      <BlogHero /> {/* Corrected component usage */}
      <Blog/>
    </>
  );
}

export default App;
