import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const StatusMessage = styled.div`
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: ${({ status }) =>
    status === "successful" ? "#e8f5e9" : "#ffebee"};
  color: ${({ status }) => (status === "successful" ? "#4caf50" : "#f44336")};
  border: 1px solid
    ${({ status }) => (status === "successful" ? "#4caf50" : "#f44336")};
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export const PackCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin: 0 0 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 1rem;
`;

export const Detail = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin: 0.2rem 0;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #e0f7fa;
  color: #00796b;
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  margin: 0.3rem 0.3rem 0 0;
`;

export const PackCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #ff5722;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem 0;
`;

export const Loader = styled.div`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin: 2rem 0;
`;
