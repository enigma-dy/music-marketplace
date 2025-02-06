import styled from "styled-components";

export const LayoutStyle = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 0px;
  background: black;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
`;

export const LayoutContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
`;

export const SidePanelContainer = styled.div`
  position: fixed;
  top: 75px;
  left: 0;
  bottom: 0;
  width: 20%;
  z-index: 999;
  /* overflow-y: auto; */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  margin-left: 20%;
  flex: 1;
  margin-top: 0px;
  /* padding: 1rem; */
  box-sizing: border-box;
  width: calc(100% - 20%);

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
  }
`;

export const TreeWrapper = styled.div`
  .tree {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #2c3e50;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    /* margin: 1rem; */
  }

  .tree-item {
    padding: 12px 20px;
    margin: 8px 0;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    cursor: default;
    color: #bdc3c7;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.05);
  }

  .tree-item.clickable {
    cursor: pointer;
    color: #ecf0f1;
    border-left: 4px solid #3498db;
    background-color: rgba(255, 255, 255, 0.1);
    margin-left: 0;
    padding-left: 16px;
    transition: all 0.3s ease;
  }

  .tree-item.clickable:hover {
    background-color: rgba(52, 152, 219, 0.2);
    color: #3498db;
    transform: translateX(8px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .tree-item.clickable:active {
    transform: translateX(4px);
    background-color: rgba(52, 152, 219, 0.3);
  }
`;
