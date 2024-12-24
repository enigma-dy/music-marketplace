import styled from "styled-components";

export const ToggleButton = styled.button`
  padding: 12px 24px;
  background-color: #007ad9;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

export const CardContainer = styled.div`
  display: ${(props) => (props.$isGridView ? "grid" : "block")};
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
  width: 100%;
`;

export const CardWrapper = styled.div`
  margin-bottom: 16px;
  ${(props) =>
    props.$isGridView &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    
    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      transform: translateY(-4px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  `}
`;

export const ListView = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #1a1a1a;
    transition: background-color 0.3s ease;
  }
`;

export const ListImage = styled.div`
  flex: 0 0 80px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

export const ListContent = styled.div`
  flex: 1;
  margin-left: 10px;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 0;
    color: #777;
    font-size: 14px;
  }
`;

export const ListActions = styled.div`
  display: flex;
  align-items: center;
`;

export const SongDetails = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #555;

  p {
    margin: 4px 0;
  }

  .m-0 {
    margin: 0;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  padding: 0.5em 0;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #45a049;
    transform: scale(1.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  &.secondary {
    background-color: #ffc107;
    &:hover {
      background-color: #e0a800;
    }
  }

  &.buy {
    background-color: #ff5722;
    &:hover {
      background-color: #e64a19;
    }
  }
`;
