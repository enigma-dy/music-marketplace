import styled from "styled-components";

export const MobileSearchStyle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const DesktopSearchStyle = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;
