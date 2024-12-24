import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
