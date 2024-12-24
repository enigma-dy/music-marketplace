import styled from "styled-components";
import { Tree } from "primereact/tree";

export const TreeContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background: transparent;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledTree = styled(Tree)`
  max-height: 300px;
  overflow-y: auto;
`;
