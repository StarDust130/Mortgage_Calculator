/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

const SliderComponent = ({
  min,
  max,
  defaultValue,
  value,
  onChange,
  label,
  amount,
  step,
  unit,
}) => {
  return (
    <>
      <div className=" ml-10 my-1">
        <Stack>
          <Typography variant="subtitle2"> {label} </Typography>
          <Typography variant="h5">
            {" "}
            {unit} {amount}{" "}
          </Typography>
        </Stack>

        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={value}
          onChange={onChange}
          step={step}
        />
        <Stack
          className="text-gray-500 text-xs"
          direction="row"
          justifyContent="space-between"
        >
          <Typography>
            {unit} {min}{" "}
          </Typography>
          <Typography>
            {unit} {max}
          </Typography>
        </Stack>
      </div>
    </>
  );
};
export default SliderComponent;
