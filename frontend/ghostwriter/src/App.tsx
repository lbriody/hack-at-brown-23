import React from 'react';
import { useState, useEffect } from 'react';
import './style/App.css';
import LoginPage from './pages/landing-page/LoginPage';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import PostPage from './pages/post-page/PostPage';
import { ChakraProvider, CSSReset, Box} from '@chakra-ui/react'
import { ThemeProvider, extendTheme} from '@chakra-ui/react'
import '@fontsource/inter';
import theme from "./Theme";
import StoryPage from './pages/story-page/StoryPage';

import StoryPage from './story-page/StoryPage';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme = {theme}>
    
    <div>
    {}
    <CSSReset />

    <Router>
       <Routes>
<<<<<<< HEAD
        <Route path='/' element={<LoginPage/>}></Route>
         {/* <Route path='/post' element={<PostPage/>}></Route> */}
         <Route path='/story' element={<StoryPage/>}></Route>
=======
        {/* <Route path='/' element={<LoginPage/>}></Route> */}
        <Route path='/' element={<StoryPage/>}></Route>
        <Route path='/post' element={<PostPage/>}></Route>
>>>>>>> story-page
        </Routes>
      </Router>
      
    </div>
    </ThemeProvider>
    </ChakraProvider>
  )
}

export default App;