import React, { useState, useRef } from "react";
import {
  CardContainer,
  CardWrapper,
  ListView,
  ListImage,
  ListContent,
  ListActions,
} from "./musicCardStyles";
import { useGetTracksQuery } from "../../store/apiSlice";
import playSong from "../../util/playSong";
import SongFooter from "./SongFooter.jsx";
import SongToggleButton from "./SongToggleButton";
import SongDetails from "./SongDetails";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import truncateText from "../../util/truncateText.jsx";

export default function SongCard() {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const op = useRef(null);

  const { data, isLoading, isError } = useGetTracksQuery();

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const showDetails = (e, song) => {
    setSelectedSong(song);
    op.current.toggle(e);
  };

  const buySong = (song) => {
    const paymentUrl = `https://example-payment-gateway.com/pay?songId=${song.id}&amount=${song.price}`;
    window.location.href = paymentUrl;
  };

  if (isLoading) return <div>Loading songs...</div>;
  if (isError || !data || !data.track)
    return <div>Error loading songs or no songs available</div>;

  return (
    <div>
      <SongToggleButton isGridView={isGridView} toggleView={toggleView} />

      <CardContainer $isGridView={isGridView}>
        {data.track.map((song, index) => (
          <CardWrapper key={index} $isGridView={isGridView}>
            {isGridView ? (
              <div>
                <Card
                  title={song.title}
                  subTitle={`Artist: ${song.artist}`}
                  footer={
                    <SongFooter
                      song={song}
                      showDetails={showDetails}
                      buySong={buySong}
                    />
                  }
                  className="p-shadow-2 p-mb-4"
                  style={{ borderRadius: "8px", overflow: "hidden" }}>
                  <p>
                    Price: ${song.price} | License: {song.license}
                  </p>
                  <p>{truncateText(song.description, 80)}</p>
                </Card>
              </div>
            ) : (
              <ListView>
                <ListImage>
                  <img
                    alt={song.title}
                    // src={`http://localhost:5000/${song.genre.name}`}
                  />
                </ListImage>
                <ListContent>
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </ListContent>
                <ListActions>
                  <Button
                    icon="pi pi-play"
                    onClick={() => playSong(song.filePath)}
                    style={{
                      backgroundColor: "#121212",
                      borderColor: "#121212",
                      color: "#fff",
                      marginRight: "0.5em",
                      borderRadius: "100%",
                    }}
                  />
                  <Button
                    label="Buy"
                    icon="pi pi-shopping-cart"
                    onClick={() => buySong(song)}
                    style={{
                      backgroundColor: "#FF5722",
                      borderColor: "#FF5722",
                    }}
                  />
                </ListActions>
              </ListView>
            )}
          </CardWrapper>
        ))}
      </CardContainer>
      <SongDetails ref={op} selectedSong={selectedSong} />
    </div>
  );
}
