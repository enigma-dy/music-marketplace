import { useState } from "react";
import { useNavigate } from "react-router";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import {
 
  DesktopSearchStyle,
} from "./styles/SearchIconStyles";

export function DesktopSearchIcon() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <DesktopSearchStyle>
      <div>
        <IconField>
          <InputIcon />
          <InputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search..."
          />
        </IconField>
      </div>
    </DesktopSearchStyle>
  );
}

export function MobileSearchIcon() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <MobileSearchStyle>
      <div className="flex gap-3">
        <IconField>
          <InputIcon className="pi pi-spin pi-spinner" />
          <InputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search..."
          />
        </IconField>
      </div>
    </MobileSearchStyle>
  );
}
