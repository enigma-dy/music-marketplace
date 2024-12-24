import React from "react";
import { Button } from "primereact/button";
import playSong from "../../util/playSong";

function SongFooter({ song, showDetails, buySong }) {
  return (
    <div>
      <Button
        label="Play"
        icon="pi pi-play"
        onClick={() => playSong(song.filePath)}
        style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50" }}
      />
      <Button
        label="Details"
        icon="pi pi-info-circle"
        onClick={(e) => showDetails(e, song)}
        style={{
          marginLeft: "0.5em",
          backgroundColor: "#FFC107",
          borderColor: "#FFC107",
        }}
      />
      <Button
        label="Buy"
        icon="pi pi-shopping-cart"
        onClick={() => buySong(song)}
        style={{
          marginLeft: "0.5em",
          backgroundColor: "#FF5722",
          borderColor: "#FF5722",
        }}
      />
    </div>
  );
}

export default SongFooter;
