import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px;
  /* background-color: #1e1e2f; */
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #fff;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #ffd700;
  }
`;

export const TrackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TrackItem = styled.li`
  background-color: #29293d;
  border: 1px solid #3c3c4f;
  border-radius: 10px;
  padding: 20px;
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const TrackTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffd700;
`;

export const TrackArtist = styled.p`
  font-size: 16px;
  color: #b3b3cc;
  margin-bottom: 8px;
`;

export const TrackDescription = styled.p`
  font-size: 14px;
  color: #d9d9e2;
  margin-bottom: 12px;
`;

export const TrackTags = styled.p`
  font-size: 13px;
  color: #a3a3bb;
  margin-bottom: 10px;

  span {
    background-color: #ff6f61;
    color: #fff;
    padding: 3px 8px;
    border-radius: 5px;
    margin-right: 5px;
    font-size: 12px;
  }
`;

export const TrackPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #4caf50;
  margin-top: 10px;
`;

export const PlayPauseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #3e8e41;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor || "#4caf50"};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#3e8e41"};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;
