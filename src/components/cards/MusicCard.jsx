import { useState } from "react";
import "primeicons/primeicons.css";
import {
  CardContainer,
  CardWrapper,
  ListView,
  ListImage,
  ListContent,
  ListActions,
  StyledButton,
  StyledCard,
  NextButton,
  NavButton,
  PriceStyle,
} from "./musicCardStyles";
import { useGetTracksQuery } from "../../store/apiSlice";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import truncateText from "../../util/truncateText";

export default function SongCard() {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [page, setPage] = useState(1);
  const [audioPlayer, setAudioPlayer] = useState(null);

  const { data, isLoading, isError, refetch } = useGetTracksQuery(page);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    refetch();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    refetch();
  };

  const showDetails = (song) => {
    setSelectedSong(song);
    setDisplayDialog(true);
  };

  const buySong = (song) => {
    const paymentUrl = `https://example-payment-gateway.com/pay?songId=${song._id}&amount=${song.price}`;
    window.location.href = paymentUrl;
  };

  const hideDialog = () => {
    setDisplayDialog(false);
  };

  const handlePlayPauseClick = async (index, trackId) => {
    try {
      if (playingIndex === index && audioPlayer) {
        audioPlayer.pause();
        setPlayingIndex(null);
        return;
      }

      const response = await fetch(
        `import.meta.env.VITE_BASE_URL/api/tracks/stream/${trackId}`
      );
      if (!response.ok) {
        throw new Error("Unable to stream track. Please try again later.");
      }

      const audioUrl = URL.createObjectURL(await response.blob());
      const newAudioPlayer = new Audio(audioUrl);

      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = "";
      }

      newAudioPlayer.play();
      setAudioPlayer(newAudioPlayer);
      setPlayingIndex(index);

      newAudioPlayer.onended = () => {
        setPlayingIndex(null);
        setAudioPlayer(null);
      };
    } catch (err) {
      alert(err.message);
    }
  };

  if (isLoading) return <div>Loading songs...</div>;
  if (isError || !data || !data.track)
    return <div>Error loading songs or no songs available</div>;

  return (
    <div>
      <div>
        <button onClick={toggleView}>
          {isGridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>
      <CardContainer $isGridView={isGridView}>
        {data.track.map((song, index) => (
          <CardWrapper key={index} $isGridView={isGridView}>
            {isGridView ? (
              <StyledCard
                backgroundImage={song.coverImagePath}
                title={song.title}
                subTitle={`Artist: ${song.createdBy.username}`}
                footer={
                  <ListActions>
                    <StyledButton
                      className="play"
                      onClick={() => handlePlayPauseClick(index, song._id)}
                    >
                      <i
                        className={
                          playingIndex === index ? "pi pi-pause" : "pi pi-play"
                        }
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </StyledButton>
                    <StyledButton className="buy" onClick={() => buySong(song)}>
                      Buy
                    </StyledButton>
                    <StyledButton
                      className="details"
                      onClick={() => showDetails(song)}
                    >
                      <span>Details</span>
                    </StyledButton>
                  </ListActions>
                }
              >
                <PriceStyle>Price: ${song.price}</PriceStyle>
              </StyledCard>
            ) : (
              <ListView>
                <ListImage>
                  <img alt={song.title} src={song.coverImagePath} />
                </ListImage>
                <ListContent>
                  <h3>{song.title}</h3>
                  <p>{song.createdBy.username}</p>
                </ListContent>
                <ListActions>
                  <StyledButton
                    className="play"
                    onClick={() => handlePlayPauseClick(index, song._id)}
                  >
                    <i
                      className={
                        playingIndex === index ? "pi pi-pause" : "pi pi-play"
                      }
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </StyledButton>
                  <StyledButton className="buy" onClick={() => buySong(song)}>
                    Buy
                  </StyledButton>
                </ListActions>
              </ListView>
            )}
          </CardWrapper>
        ))}
      </CardContainer>

      <Dialog header="" visible={displayDialog} onHide={hideDialog}>
        {selectedSong && (
          <div>
            <h3 style={{ paddingLeft: "10px" }}>Song Details</h3>
            <h3 style={{ margin: "10px" }}>{selectedSong.title}</h3>
            <p style={{ margin: "10px" }}>
              <strong>Artist:</strong> {selectedSong.createdBy.username}
            </p>
            <p style={{ margin: "10px" }}>
              <strong>Genre:</strong> {selectedSong.genre?.name || "N/A"}
            </p>
            <p style={{ margin: "10px" }}>
              <strong>License:</strong> {selectedSong.license}
            </p>
            <p style={{ margin: "10px" }}>
              <strong>Description:</strong>{" "}
              {truncateText(selectedSong.description, 300)}
            </p>
          </div>
        )}
      </Dialog>

      <NavButton>
        <NextButton onClick={handlePrevPage}>Prev</NextButton>
        <NextButton onClick={handleNextPage}>Next</NextButton>
      </NavButton>
    </div>
  );
}
