import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetTracksQuery } from "../../store/apiSlice";
import truncateText from "../../util/truncateText";
import { formatDistanceToNow } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Card,
  DataTableWrapper,
  PlayPauseButton,
  ActionMenuButton,
  OptionContainer,
  OptionItem,
  NumberWrapper,
  NumberText,
  StyledDiv,
} from "./MusicTableStyles";

export default function SongDataTable() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);

  const { data: apiResponse = {}, isLoading, error } = useGetTracksQuery();

  if (isLoading) {
    return (
      <StyledDiv>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton />
        </SkeletonTheme>
      </StyledDiv>
    );
  }

  if (error) {
    console.log("API Response:", apiResponse);
    console.log("Error:", error);
    return <div>Error fetching tracks data.</div>;
  }

  const songs = apiResponse.track || [];

  const handlePlayPauseClick = async (index, trackId) => {
    try {
      if (playingIndex === index && audioPlayer) {
        audioPlayer.pause();
        setPlayingIndex(null);
        return;
      }

      const response = await fetch(
        `https://music-marketplace-backend.onrender.com/api/tracks/stream/${trackId}`
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

  const handleMenuClick = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const artistTemplate = (rowData) => {
    return (
      <span title={rowData.createdBy.username}>
        {truncateText(rowData.createdBy.username, 10)}
      </span>
    );
  };

  const playPauseTemplate = (rowData, options) => {
    const isPlaying = playingIndex === options.rowIndex;

    return (
      <PlayPauseButton
        onClick={() => handlePlayPauseClick(options.rowIndex, rowData._id)}
      >
        <i className={`pi ${isPlaying ? "pi-pause" : "pi-play"}`} />
      </PlayPauseButton>
    );
  };

  const numberTemplate = (rowData, options) => {
    return (
      <NumberWrapper>
        <NumberText>{options.rowIndex + 1}</NumberText>
      </NumberWrapper>
    );
  };

  const menuTemplate = (rowData, options) => {
    return (
      <div>
        <ActionMenuButton onClick={() => handleMenuClick(options.rowIndex)}>
          <i className="pi pi-ellipsis-v" />
        </ActionMenuButton>
        {activeMenuIndex === options.rowIndex && (
          <OptionContainer>
            <OptionItem>Buy</OptionItem>
            <OptionItem>Bid</OptionItem>
            <OptionItem>Request for changes</OptionItem>
          </OptionContainer>
        )}
      </div>
    );
  };

  const timeAgo = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return "";
    }
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  };

  const createdAtTemplate = (rowData) => {
    return <span>{timeAgo(rowData.createdAt)}</span>;
  };

  const updatedAtTemplate = (rowData) => {
    return <span>{timeAgo(rowData.updatedAt)}</span>;
  };

  return (
    <DataTableWrapper>
      <DataTable
        value={songs}
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
      >
        <Column body={numberTemplate} header="No." />
        <Column field="title" header="Song Title" />
        <Column body={artistTemplate} header="Artist" />
        <Column field="genre.name" header="Genre" />
        <Column field="price" header="Price" />
        <Column field="license" header="License" />
        <Column body={createdAtTemplate} header="Created At" />
        <Column body={playPauseTemplate} header="Play/Pause" />
        <Column body={menuTemplate} header="Actions" />
      </DataTable>
    </DataTableWrapper>
  );
}
