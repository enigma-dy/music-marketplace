import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #444;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
`;

export const PlaylistSection = styled.section`
  grid-column: 1 / -1;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PlaylistCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PlaylistCover = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 1rem;
  margin-right: 2rem;
  object-fit: cover;
`;

export const PlaylistTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const PlaylistInfo = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const PlaylistBeats = styled.div`
  margin-top: 2rem;
`;

export const BeatCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const BeatCover = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 0.5rem;
  margin-right: 1.5rem;
  object-fit: cover;
`;

export const BeatDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BeatTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const BeatDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const BeatPrice = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const BeatLicense = styled.p`
  font-size: 0.9rem;
  color: #777;
`;
