import React from "react";

export default function SongToggleButton({ isGridView, toggleView }) {
  return (
    <button onClick={toggleView}>
      {isGridView ? (
        <i className="pi-list" style={{ fontSize: "1rem" }}></i>
      ) : (
        <i className="pi-microsoft" style={{ fontSize: "1rem" }}></i>
      )}
    </button>
  );
}
