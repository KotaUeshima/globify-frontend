import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const boxStyle = {
  position: "absolute",
  top: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "400px",
  zIndex: "10",
};

const inputStyle = {
  padding: "0.5rem",
  fontSize: "1.5rem",
  width: "100%",
};

function Places({ setSearch }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setSearch({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect} style={boxStyle}>
      <ComboboxInput
        style={inputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search for a random place"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status == "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default Places;
