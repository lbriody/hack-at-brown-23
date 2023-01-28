import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './landing-page/LoginPage';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import PostPage from './post-page/PostPage';
import { ChakraProvider, CSSReset, Box} from '@chakra-ui/react'
import { ThemeProvider, extendTheme} from '@chakra-ui/react'
import '@fontsource/inter';
import theme from "./Theme";
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
        <Route path='/' element={<LoginPage/>}></Route>
         {/* <Route path='/post' element={<PostPage/>}></Route> */}
         <Route path='/story' element={<StoryPage/>}></Route>
        </Routes>
      </Router>
      
    </div>
    </ThemeProvider>
    </ChakraProvider>
  )
}

export default App;