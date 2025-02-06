import styled from "styled-components";

export const Card = styled.div`
  background: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 15px 0;
  }
`;

export const StyledDiv = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: #303030;
  border-radius: 5px;
`;

export const DataTableWrapper = styled.div`
  .p-datatable {
    margin-top: 20px;
    font-family: "Arial", sans-serif;
    width: 100%;
    table-layout: fixed;
    border: none;
    background-color: transparent;
    box-shadow: none;
  }

  .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    padding: 12px;

    font-size: 14px;
    background-color: #121212;
    border: 1px solid #121212;
  }

  .p-datatable-thead > tr > th {
    color: white;
    font-weight: bold;
  }

  .p-datatable-tbody > tr > td {
    color: white;
  }

  @media (max-width: 768px) {
    .p-datatable-tbody > tr > td {
      font-size: 12px;
      /* padding: 2px; */
    }
    .p-datatable-thead > tr > th {
      font-size: 12px;
      padding-left: 30px;
    }

    .p-datatable-tbody > tr > td:nth-child(n + 4),
    .p-datatable-thead > tr > th:nth-child(n + 4) {
      display: none;
    }

    .p-datatable-tbody > tr > td:nth-child(8),
    .p-datatable-thead > tr > th:nth-child(8) {
      display: table-cell !important;
    }
    .p-datatable-tbody > tr > td:nth-child(8) {
      padding-left: 30px;
    }

    .p-datatable {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media (max-width: 390px) {
    display: none;
  }
`;

export const PlayPauseButton = styled.button`
  padding: 10px;
  border: 2px solid transparent;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  .p-button-icon {
    font-size: 24px;
    color: #007bff;
  }

  &:hover {
    background: transparent;
    border-color: #007bff;
    border-radius: 100%;
  }

  @media (max-width: 768px) {
    padding: 8px;
    .p-button-icon {
      font-size: 20px;
    }
  }
`;

export const ActionMenuButton = styled.button`
  padding: 10px;
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;

  .p-button-icon {
    font-size: 20px;
    color: #007bff;
  }

  &:hover {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px;
    .p-button-icon {
      font-size: 18px;
    }
  }
`;

export const OptionContainer = styled.div`
  position: absolute;
  right: 10px;
  background-color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: #fff;
  min-width: 150px;
  max-width: 100%;
  overflow-x: hidden;
  white-space: nowrap;
  z-index: 100;

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 8px;
  }
`;

export const OptionItem = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberText = styled.span`
  font-size: 18px;
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;
