import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const GenreHeader = styled.h2`
  margin-top: 0;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const SongItem = styled.li`
  width: calc(33.33% - 10px);
  margin: 10px;
  background-color: #3f3f3f;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SongImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const SongInfo = styled.div`
  text-align: center;
`;

export const SongTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const SongOwner = styled.p`
  font-size: 14px;
  color: #c6c5c5;
`;
