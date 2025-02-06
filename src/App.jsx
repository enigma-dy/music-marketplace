import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Layout from "./uicomponents/layout/Layout";
import AuthPage from "./pages/Login/AuthPage";

import TracksPage from "./pages/Beats/Beats";
import Packs from "./pages/Packs/Packs";
import Producer from "./pages/Producers/Producer";
import GenresPage from "./pages/Genres/Genre";
import PlaylistsPage from "./pages/Playlist/AllPlaylist";
import UploadBeatPage from "./pages/Upload/UploadBeat";
import UploadPack from "./pages/Upload/UploadPack";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="beats" element={<TracksPage />} />
        <Route path="packs" element={<Packs />} />
        <Route path="genres" element={<GenresPage />} />
        <Route path="producer" element={<Producer />} />
        <Route path="upload/beat" element={<UploadBeatPage />} />
        <Route path="playlist" element={<PlaylistsPage />} />
        <Route path="upload/pack" element={<UploadPack />} />
      </Route>
      <Route path="/login" element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
