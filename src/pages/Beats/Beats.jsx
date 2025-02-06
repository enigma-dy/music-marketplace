import { useState } from "react";
import { useGetTracksQuery } from "../../store/apiSlice";
import 'primeicons/primeicons.css';
 
import {
  Container,
  TrackList,
  TrackItem,
  TrackTitle,
  TrackArtist,
  TrackDescription,
  TrackTags,
  TrackPrice,
  ButtonGroup,
  Button,
  PlayPauseButton,
} from "./BeatStyled";

const TracksPage = () => {
  const { data, error, isLoading } = useGetTracksQuery();
  const [isPlaying, setIsPlaying] = useState({});

  console.log(data)

  if (isLoading) {
    return <div>Loading tracks...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !Array.isArray(data.track)) {
    return <div>No tracks available</div>;
  }

  const handlePlayPause = (trackId) => {
    setIsPlaying((prev) => ({ ...prev, [trackId]: !prev[trackId] }));
  };

  const handleBuy = (trackId) => {
    alert(`Track ${trackId} has been added to your cart.`);
  };

  const handleRequestChanges = (trackId) => {
    alert(`You requested changes for track ${trackId}.`);
  };

  const handleBid = (trackId) => {
    alert(`You placed a bid on track ${trackId}.`);
  };

  return (
    <Container>
      <h1>Tracks</h1>
      <TrackList>
        {data.track.map((track) => (
          <TrackList>
          {data.track.map((track) => (
            <TrackItem key={track._id} coverImage={track.coverImagePath}>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackArtist>By {track.createdBy}</TrackArtist>
              <TrackDescription>{track.description}</TrackDescription>
              <TrackTags>
                Tags:{" "}
                {track.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </TrackTags>
              <TrackPrice>Price: ${track.price}</TrackPrice>
              <PlayPauseButton onClick={() => handlePlayPause(track._id)}>
                {isPlaying[track._id] ? (
                  <i className="pi pi-pause"></i>
                ) : (
                  <i className="pi pi-play"></i>
                )}
              </PlayPauseButton>
              <ButtonGroup>
                <Button
                  onClick={() => handleBuy(track._id)}
                  bgColor="#007bff"
                  hoverColor="#0056b3"
                >
                  Buy
                </Button>
                <Button
                  onClick={() => handleRequestChanges(track._id)}
                  bgColor="#ff9800"
                  hoverColor="#e68900"
                >
                  Request Changes
                </Button>
                <Button
                  onClick={() => handleBid(track._id)}
                  bgColor="#673ab7"
                  hoverColor="#512da8"
                >
                  Bid
                </Button>
              </ButtonGroup>
            </TrackItem>
          ))}
        </TrackList>
        
        ))}
      </TrackList>
    </Container>
  );
};

export default TracksPage;
