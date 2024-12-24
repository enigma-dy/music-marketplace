import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #6a11cb, #2575fc);
`;

export const AuthCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  label {
    display: block;
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.95rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #2575fc;
      box-shadow: 0px 0px 5px rgba(37, 117, 252, 0.3);
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.secondary ? "#2575fc" : "#6a11cb")};
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
    background: ${(props) => (props.secondary ? "#1e63d4" : "#5a0fa8")};
  }
`;

export const ToggleLink = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: purple;

  a {
    color: #2575fc;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Error = styled.p`
  color: red;
`;
