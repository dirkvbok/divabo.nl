import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Outlet, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/home";
import AboutPage from "./routes/about";
import styled from "styled-components";

function App() {
  useEffect(() => {
    document.title = "Dirk";
  }, []);

  return (
    <Container>
      <Header />
      <Outlet />
      <Filler />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* justify-content: space-between; */
`;

const Filler = styled.div`
  display: flex:
  flex: 1;
`;

export default App;
