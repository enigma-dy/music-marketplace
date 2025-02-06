import styled from "styled-components";
import { Link } from "react-router";

export const StyledTabMenu = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: transparent;

  .tabmenu-item {
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    border: none;
    background: transparent;
    color: #ffffff;
    transition: color 0.3s;

    &:hover {
      color: #007ad9;
    }

    &:hover::after {
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 0;
      background-color: #007ad9;
      transition: width 0.3s ease;
    }

    .icon {
      margin-right: 8px;
    }

    /* Dynamically adjust font size */
    span {
      font-size: clamp(0.8rem, 2vw, 1.2rem); /* Min 0.8rem, scales up to 1.2rem */
      white-space: nowrap; /* Prevents wrapping */
    }
  }

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;

  &:hover {
    color: inherit;
  }

  
`;
export const DesktopDisplayStyle = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
    
  }
`;

