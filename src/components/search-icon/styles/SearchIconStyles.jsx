import styled from "styled-components";
import { InputText } from "primereact/inputtext";

export const DesktopSearchStyle = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    .search-container {
      display: flex;
      align-items: center;
      background-color: #f4f4f4;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    .p-inputtext {
      border: none;
      outline: none;
      font-size: 1.2rem;
      padding: 0.5rem;
      width: 100%;
    }
    .p-inputtext:focus {
      box-shadow: none;
    }
    .p-inputicon {
      color: #007bff;
      font-size: 1.2rem;
    }
  }
`;

