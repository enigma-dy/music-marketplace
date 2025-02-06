import React, { forwardRef } from "react";
import { OverlayPanel } from "primereact/overlaypanel";

const SongDetails = forwardRef(({ selectedSong }, ref) => (
  <OverlayPanel ref={ref}>
    {selectedSong ? (
      <div>
        <h3>{selectedSong.title}</h3>
        <p>Artist: {selectedSong.createdBy}</p>
        <p>Genre: {selectedSong.genre.name}</p>
        <p>Description: {selectedSong.description}</p>
      </div>
    ) : (
      <div>No details available</div>
    )}
  </OverlayPanel>
));

export default SongDetails;
