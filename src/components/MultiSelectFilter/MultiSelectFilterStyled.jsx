import styled from "styled-components";
import { Tree } from "primereact/tree";

export const TreeContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  /* background: #ffffff; */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* padding: 16px; */
  border: 0.09em solid #e0e0e0;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f8f8f8;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export const StyledTree = styled(Tree)`
  .p-tree-container {
    background: transparent;
    border: none;
  }

  .p-treenode {
    background: black;

    padding: 8px 0;
  }

  .p-treenode-label {
    font-size: 14px;
    color: #333333;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .p-checkbox .p-checkbox-box {
    border-radius: 4px;
    border: 2px solid #cccccc;
    width: 18px;
    height: 18px;
  }

  .p-checkbox .p-checkbox-box.p-highlight {
    background-color: #007bff;
    border-color: #007bff;
  }

  .p-checkbox .p-checkbox-box.p-highlight:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  .p-checkbox .p-checkbox-box:not(.p-highlight):hover {
    border-color: #007bff;
  }
`;
