import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba"); // Add your background image URL here
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledDiv = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: #303030;
  border-radius: 5px;
`;

export const AuthCard = styled.div`
  background: rgba(0, 0, 0, 0.8); // Semi-transparent black background
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(255, 0, 0, 0.3); // Red shadow for contrast
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px); // Blur effect for glassmorphism
  border: 1px solid rgba(255, 255, 255, 0.1); // Subtle border
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ff4d4d; // Red for emphasis
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #ccc; // Light gray for subtlety
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  label {
    display: block;
    font-size: 0.9rem;
    color: #ff4d4d; // Red for labels
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.95rem;
    border: 1px solid #444; // Dark border
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1); // Semi-transparent input background
    color: #fff; // White text
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #ff4d4d; // Red border on focus
      box-shadow: 0px 0px 5px rgba(255, 77, 77, 0.5); // Red glow
    }
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ff4d4d'><polygon points='0,0 16,0 8,16'/></svg>");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 10px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(
    to right,
    #ff4d4d,
    #2575fc
  ); // Red to blue gradient
  color: white;
  font-size: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(
      to right,
      #ff1a1a,
      #1e63d4
    ); // Darker gradient on hover
  }

  &:disabled {
    background: #555; // Gray when disabled
    cursor: not-allowed;
  }
`;

export const ToggleLink = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #ccc; // Light gray for subtlety

  a {
    color: #ff4d4d; // Red for links
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Error = styled.p`
  color: #ff4d4d; // Red for errors
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;
`;
