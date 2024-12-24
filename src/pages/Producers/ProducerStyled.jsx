import styled from "styled-components";

export const ProducerListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 30px;
  min-height: 100vh;
`;

export const ProducerCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  height: 320px;
  background: ${(props) =>
    `url(${
      props.$bgImage || "https://via.placeholder.com/300x400"
    }) center/cover no-repeat`};
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProducerInfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.8));
  padding: 20px;
  color: #fff;
  text-align: left;
`;

export const ProducerName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px;
`;

export const ProducerEmail = styled.p`
  font-size: 14px;
  margin: 0 0 5px;
  color: #e0e0e0;
`;

export const ProducerBio = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SocialLinks = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 12px;

  a {
    color: #ffd700;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;
