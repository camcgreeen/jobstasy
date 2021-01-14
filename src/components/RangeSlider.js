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
      root: {
        // marginLeft: 20,
        // marginRight: 20,
        width: "95%",
        display: "flex",
        margin: "0 auto",
      },
      markLabel: {
        marginTop: "10px",
        marginRight: "10px",
      },
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
    label: "£150k",
  },
];

export default function RangeSlider(props) {
  const [value, setValue] = React.useState([0, 150000]);

  const handleChange = (event, newValue) => {
    if (newValue[1] > newValue[0]) {
      setValue(newValue);
      props.handleChangeSlider(event, newValue);
    }
    // setValue(newValue);
    // props.handleChangeSlider(event, newValue);
  };

  const resetValue = () => {
    setValue([0, 150000]);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(x) =>
          x !== 0 ? Math.round(x / 1000).toString() + "k" : 0
        }
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        color="primary"
        marks={marks}
        min={0}
        max={150000}
        step={5000}
        // onChange={(e, val) => console.log(val)}
      />
    </ThemeProvider>
  );
}
