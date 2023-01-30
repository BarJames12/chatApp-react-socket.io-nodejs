import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "react-hot-toast";
import { Toaster } from "react-hot-toast";
import SocialButtons from "./components/SocialButtons/SocialButtons";

const App = () => (
  <BrowserRouter>
    <Toaster />
    <SocialButtons />
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" exact element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
