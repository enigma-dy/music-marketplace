import styled from "styled-components";
import { Button } from "primereact/button";

export const DesktopDisplay = styled.div`
  display: block;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const MobileMenuDisplay = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: block;
  }
`;
export const StyledDiv = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: #303030;
  border-radius: 5px;
`;

export const NavStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  padding: 20px;
  height: 80px;
  overflow: hidden;

  @media (max-width: 720px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 30px;
  }
`;

export const RightNavStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 0; // Remove the gap between buttons
  align-items: baseline;
  background-color: #121212;
  padding: 20px;
`;

export const StyledButton = styled(Button).attrs((props) => ({
  style: {
    backgroundColor: props.color || "blue", // Default to blue if no color is provided
  },
}))`
  color: white;
  border: none;
  border-radius: 0;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.color === "red" ? "#cc0000" : "#0056b3"}; // Darker shade on hover
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${(props) =>
      props.color === "red"
        ? "#990000"
        : "#004085"}; // Even darker shade on active
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 10px 0;

  @media (min-width: 720px) {
    display: none; /* Hide divider in desktop view */
  }
`;
