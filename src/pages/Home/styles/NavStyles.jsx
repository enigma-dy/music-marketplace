import styled from "styled-components";
import { Button } from "primereact/button";

export const LeftNavStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #121212;
  padding: 20px;
`;

export const RightNavStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: baseline;
  background-color: #121212;
  padding: 20px;
`;

export const StyledButton = styled(Button)`
  background: none;
  color: white;
  border-radius: 0px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;
