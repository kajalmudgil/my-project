import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './components/Home';
import ToDo from './components/ToDo';
import Header from './components/Header';
import Footer from './components/Footer'; 
import About from './components/About';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

const Main = styled.main`
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: calc(100vh - 120px);
`;

export default App;
