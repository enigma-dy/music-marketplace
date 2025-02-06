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
  /* padding: 5%; */
  flex-grow: 1;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem); 
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.5rem); 
    margin-bottom: 1.25rem;
    max-width: 90%;
    line-height: 1.6;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: clamp(8px, 2vw, 12px) clamp(16px, 5vw, 24px);
    border: none;
    border-radius: 8px;
    font-size: clamp(1rem, 3vw, 1.2rem); 
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    height: 60vh; 
    padding: 5%;

    h1 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
    }

    p {
      font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    }
  }

  @media (max-width: 480px) {
    height: 50vh; 

    p {
      line-height: 1.4; 
    }
  }
`;
