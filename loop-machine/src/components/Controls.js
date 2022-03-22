import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

const Controls = ({ currentPosition, duration, setMouseIsDownState, seek }) => {
  return (
    <>
      <Box
        sx={{ width: "80%" }}
        onMouseDown={setMouseIsDownState}
        onMouseMove={seek}
        onMouseUp={setMouseIsDownState}
      >
        <LinearProgress
          variant="determinate"
          style={{ height: "40px", cursor: "pointer" }}
          value={(currentPosition / duration) * 100}
        />
      </Box>
    </>
  );
};
export default Controls;


