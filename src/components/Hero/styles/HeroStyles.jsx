import styled from "styled-components";
import studio from "../../../assets/images/studio.jpg";

export const HeroStyles = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-image: url(${studio});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  flex-grow: 1;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 16px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
    max-width: 600px;
    line-height: 1.6;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 10px;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
