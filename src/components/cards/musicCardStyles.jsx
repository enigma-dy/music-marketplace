import styled from "styled-components";
import { Card } from "primereact/card";

export const ToggleButton = styled.button`
  padding: 12px 24px;
  background-color: #007ad9;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;
const ToggleViewButton = styled.button`
  padding: 10px 15px;
  margin: 10px;
  border: none;
  background-color: #007ad9;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }

  i {
    font-size: 1.2rem;
  }
`;
export const CardContainer = styled.div`
  display: ${(props) => (props.$isGridView ? "grid" : "block")};
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export const CardWrapper = styled.div`
  ${(props) =>
    props.$isGridView &&
    `
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}
`;

export const ListView = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 1em;

  &:hover {
    background-color: #1a1a1a;
    transition: background-color 0.3s ease;
  }
`;

export const ListImage = styled.div`
  flex: 0 0 80px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

export const ListContent = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 0;
    color: #777;
    font-size: 14px;
  }
`;

export const ListActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5em;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  transition: transform 0.3s ease, background-color 0.3s ease, border 0.3s ease;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.play {
    background: none;
    border: 2px solid transparent;
  }

  &.buy {
    background-color: #ff5722;
    border-radius: 4px;
  }

  &.details {
    background-color: blue;
    border-radius: 4px;
  }

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
    border: 2px solid white;
  }
  @media (max-width: 600px) {
    height: 30px;
    margin: 0px;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .p-card-title {
    font-size: 20px;
    color: #f6f6f6;
    margin: 20px;
  }

  .p-card-subtitle {
    font-size: 14px;
    color: #777;
    margin: 20px;
  }

  .p-card-footer {
    position: absolute;
    bottom: 5px;
    gap: 1em;

    width: 100%;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;

    .p-card-title {
      font-size: 20px;
      color: #f6f6f6;
      margin: 5px;
    }

    .p-card-subtitle {
      font-size: 14px;
      color: #777;
      margin: 5px;
    }

    .p-card-footer {
      position: absolute;
      bottom: 5px;
      gap: 1em;

      width: 100%;
    }
  }
`;
export const PriceStyle = styled.p`
  margin: 20px;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 15px;
    margin: 10px;
  }
`;
export const SongDetails = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #555;

  p {
    margin: 4px 0;
  }

  .m-0 {
    margin: 0;
  }
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #45a049;
    transform: scale(1.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  &.secondary {
    background-color: #ffc107;
    &:hover {
      background-color: #e0a800;
    }
  }

  &.buy {
    background-color: #ff5722;
    &:hover {
      background-color: #e64a19;
    }
  }

  @media (max-width: 600px) {
    flex: 1;
    margin-top: 0.5em; /* Adjust spacing for small screens */
  }
`;

export const NextButton = styled.button`
  background-color: blue; /* Green background */
  color: white; /* White text */
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green when hovered */
  }

  &:disabled {
    background-color: #ccc; /* Gray background when disabled */
    cursor: not-allowed; /* Disable pointer cursor */
  }
`;

export const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
