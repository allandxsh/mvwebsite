import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import ChatSection from "./components/ChatSection";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Info slides={SliderData} />
      <ChatSection />
    </>
  );
}

export default App;
