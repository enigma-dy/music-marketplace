import styled from "styled-components";

const MobileDisplayStyle = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: block;
  }
`;

export default MobileDisplayStyle;
