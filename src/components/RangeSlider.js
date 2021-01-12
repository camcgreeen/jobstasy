import React from "react";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function valuetext(value) {
  return `${value}°C`;
}

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "white",
        border: "solid #444cf4  1px",
        stroke: "#444cf4",
        height: "30px",
        width: "30px",
        transform: "translate(-10px, -10px)",
        // transform: "translate(-25%, -25%)",
      },
      track: {
        color: "#444cf4",
      },
      rail: {
        color: "#444cf4",
      },
    },
  },
});

const marks = [
  {
    value: 0,
    label: "£0",
  },
  {
    value: 150000,
    label: "£150,000+",
  },
];

export default function RangeSlider() {
  const [value, setValue] = React.useState([25000, 50000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(x) => Math.round(x / 1000).toString() + "k"}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        color="primary"
        marks={marks}
        min={0}
        max={150000}
      />
    </ThemeProvider>
  );
}
