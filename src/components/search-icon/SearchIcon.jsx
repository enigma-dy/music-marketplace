import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import {
  MobileSearchStyle,
  DesktopSearchStyle,
} from "./styles/SearchIconStyles";

export function DesktopSearchIcon() {
  return (
    <DesktopSearchStyle>
      <div className="flex gap-3">
        <IconField>
          <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
          <InputText />
        </IconField>
      </div>
    </DesktopSearchStyle>
  );
}

export function MobileSearchIcon() {
  return (
    <MobileSearchStyle>
      <div className="flex gap-3">
        <IconField>
          <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
          <InputText />
        </IconField>
      </div>
    </MobileSearchStyle>
  );
}
