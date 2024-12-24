import React from "react";
import { Chip } from "primereact/chip";

export default function BasicDemo() {
  return (
    <div className="card flex flex-wrap gap-2">
      <Chip label="Action" removable />
      <Chip label="Comedy" removable />
      <Chip label="Mystery" removable />
      <Chip label="Thriller" removable />
    </div>
  );
}
