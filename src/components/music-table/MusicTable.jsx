import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetTracksQuery } from "../../store/apiSlice";
import truncateText from "../../util/truncateText";
import {
  Card,
  DataTableWrapper,
  PlayPauseButton,
  ActionMenuButton,
  OptionContainer,
  OptionItem,
  NumberWrapper,
  NumberText,
} from "./MusicTableStyles";

export default function SongDataTable() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);

  const { data: apiResponse = {}, isLoading, error } = useGetTracksQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching tracks data.</div>;
  }

  const songs = apiResponse.track || [];

  const handlePlayPauseClick = async (index, trackId) => {
    try {
      if (playingIndex === index && audioPlayer) {
        // Pause if already playing
        audioPlayer.pause();
        setPlayingIndex(null);
        return;
      }

      // Fetch the track stream
      const response = await fetch(`/api/tracks/stream/${trackId}`);
      if (!response.ok) {
        throw new Error("Unable to stream track. Please try again later.");
      }

      // Play the fetched stream
      const audioUrl = URL.createObjectURL(await response.blob());
      const newAudioPlayer = new Audio(audioUrl);

      // Clean up previous audio player
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = "";
      }

      newAudioPlayer.play();
      setAudioPlayer(newAudioPlayer);
      setPlayingIndex(index);

      // Stop playback when the track ends
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

  const descriptionTemplate = (rowData) => {
    return (
      <span title={rowData.description}>
        {truncateText(rowData.description, 5)}
      </span>
    );
  };

  const artistTemplate = (rowData) => {
    return (
      <span title={rowData.artist}>{truncateText(rowData.artist, 10)}</span>
    );
  };

  const playPauseTemplate = (rowData, options) => {
    const isPlaying = playingIndex === options.rowIndex;

    return (
      <PlayPauseButton
        onClick={() => handlePlayPauseClick(options.rowIndex, rowData._id)}>
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

  return (
    <Card>
      <DataTableWrapper>
        <DataTable
          value={songs}
          tableStyle={{ minWidth: "50rem" }}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 20]}>
          <Column body={numberTemplate} header="No." />
          <Column field="title" header="Song Title" />
          <Column body={artistTemplate} header="Artist" />
          <Column field="genre.name" header="Genre" />
          <Column body={descriptionTemplate} header="Description" />
          <Column field="price" header="Price" />
          <Column field="license" header="License" />
          <Column field="createdAt" header="Created At" />
          <Column field="updatedAt" header="Updated At" />
          <Column body={playPauseTemplate} header="Play/Pause" />
          <Column body={menuTemplate} header="Actions" />
        </DataTable>
      </DataTableWrapper>
    </Card>
  );
}
