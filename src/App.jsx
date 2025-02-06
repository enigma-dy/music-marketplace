import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import styled from "styled-components";
import { PuffLoader } from "react-spinners"; // Importing a cool spinner
import Layout from "./uicomponents/layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const AuthPage = lazy(() => import("./pages/Login/AuthPage"));
const TracksPage = lazy(() => import("./pages/Beats/Beats"));
const Packs = lazy(() => import("./pages/Packs/Packs"));
const Producer = lazy(() => import("./pages/Producers/Producer"));
const GenresPage = lazy(() => import("./pages/Genres/Genre"));
const PlaylistsPage = lazy(() => import("./pages/Playlist/AllPlaylist"));
const UploadBeatPage = lazy(() => import("./pages/Upload/UploadBeat"));
const UploadPack = lazy(() => import("./pages/Upload/UploadPack"));

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Light gray background */
`;

function LoadingSpinner() {
  return (
    <LoaderContainer>
      <PuffLoader color="#4A90E2" size={80} />
    </LoaderContainer>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
