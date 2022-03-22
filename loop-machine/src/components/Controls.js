import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Controls = ({ currentPosition, duration, seek }) => {
  return (
    <>
      <Box sx={{ width: "80%" }}>
        <Slider
          value={(currentPosition / duration) * 100}
          onChange={seek}
        ></Slider>
      </Box>
    </>
  );
};
export default Controls;
