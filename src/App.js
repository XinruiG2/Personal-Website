import React from 'react'
import styled from 'styled-components'
import LandingPage from './pages/LandingPage'
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(241, 241, 241);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    border: 1px solid black;
    width: calc(100vw - 70px);
    height: calc(100vh - 70px);
    box-sizing: border-box;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/contact-me" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Container>
  )
}

export default App
