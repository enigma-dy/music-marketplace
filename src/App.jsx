import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Layout from "./uicomponents/layout/Layout";
import AuthPage from "./pages/Login/AuthPage";

import TracksPage from "./pages/Beats/Beats";
import Packs from "./pages/Packs/Packs";
import Producer from "./pages/Producers/Producer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="beats" element={<TracksPage />} />
        <Route path="packs" element={<Packs />} />
        <Route path="producer" element={<Producer />} />
        <Route
          path="playlist"
          element={
            <>
              <h1>Music</h1>
            </>
          }
        />
      </Route>
      <Route path="/login" element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
