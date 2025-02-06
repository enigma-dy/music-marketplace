import React from "react";
import styled from "styled-components";
import { useGetPlaylistsQuery } from "../../store/apiSlice";
import {
  Header,
  Container,
  PlaylistSection,
  PlaylistCard,
  PlaylistHeader,
  PlaylistCover,
  PlaylistTitle,
  PlaylistInfo,
  PlaylistBeats,
  BeatCard,
  BeatCover,
  BeatDetails,
  BeatTitle,
  BeatDescription,
  BeatPrice,
  BeatLicense
} from "./PlaylistStyled";

const PlaylistsPage = () => {
  // Fetch playlists from the API using RTK Query
  const { data, error, isLoading } = useGetPlaylistsQuery();

  if (isLoading) {
    return <p>Loading playlists...</p>;
  }

  if (error) {
    return <p>Error fetching playlists</p>;
  }

  return (
    <>
      <Container>
        {data?.playlists?.map((playlist) => (
          <PlaylistCard key={playlist._id}> 
            <PlaylistHeader>
              <PlaylistCover src={playlist.cover} alt="Playlist Cover" />
              <div>
                <PlaylistTitle>{playlist.title}</PlaylistTitle>
                <PlaylistInfo>
                  Created on: {new Date(playlist.createdAt).toLocaleDateString()}
                </PlaylistInfo>
              </div>
            </PlaylistHeader>

            <PlaylistBeats>
              <h3>Beats</h3>
              {playlist.beats.map((beat) => (
                <BeatCard key={beat._id}> {/* Added the 'key' prop here */}
                  <BeatCover src={beat.coverImagePath} alt="Beat Cover" />
                  <BeatDetails>
                    <BeatTitle>{beat.title}</BeatTitle>
                    <BeatDescription>{beat.description}</BeatDescription>
                    <BeatPrice>Price: ${beat.price}</BeatPrice>
                    <BeatLicense>License: {beat.license}</BeatLicense>
                  </BeatDetails>
                </BeatCard>
              ))}
            </PlaylistBeats>
          </PlaylistCard>
        ))}
      </Container>
    </>
  );
};

export default PlaylistsPage;
