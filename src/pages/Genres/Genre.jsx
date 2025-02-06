import React from "react";
import styled from "styled-components";
import { useGetGenresWithSongsQuery } from "../../store/apiSlice";
import { useLocation } from "react-router";
import { SongOwner,SongTitle,SongInfo,SongImage,SongItem,SongList,GenreHeader,Container } from "./GenreStyled";

const GenresPage = () => {
  const location = useLocation(); 
  const queryString = location.search; 
  const { data, isLoading, error } = useGetGenresWithSongsQuery(queryString);
  console.log(data)
  
  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  if (error) {
    return <p>Failed to load genres. Please try again later.</p>;
  }

  return (
    <Container>
      {data?.data?.map((genre, index) => (
        <div key={index}>
          <GenreHeader>{genre.genre}</GenreHeader>
          <SongList>
            {genre.songs.map((song, songIndex) => (
              <SongItem key={songIndex}>
                <SongImage src={song.coverImage} alt={song.title} />
                <SongInfo>
                  <SongTitle>{song.title}</SongTitle>
                  <SongOwner>by {song.owner}</SongOwner>
                </SongInfo>
              </SongItem>
            ))}
          </SongList>
        </div>
      ))}
    </Container>
  );
};

export default GenresPage;
