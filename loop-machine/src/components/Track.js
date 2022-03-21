import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Track = ({ track: { title, isMuted }, index, onMutePress, style }) => {
  return (
    <Card
      sx={{
        // display: "flex",
        backgroundColor: style,
        // alignItems: "center",
        // width: "40%",
        // height: "15%",
        m: 1,
      }}
    >
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
      <Box sx={{ m: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Track: {title}
          </Typography>
        </CardContent>
        <Box>
          {isMuted ? (
            <Button
              onClick={() => onMutePress(index)}
              variant="contained"
              startIcon={<VolumeUpIcon />}
            >
              UnMute
            </Button>
          ) : (
            <Button
              onClick={() => onMutePress(index)}
              variant="contained"
              startIcon={<VolumeOffIcon />}
            >
              Mute
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default Track;

{
  /* <div style={style}>
<p>{`Track: ${title} -- isMuted ${isMuted}`}</p>
<button onClick={() => onMutePress(index)}>
  {isMuted ? "Unmute" : "Mute"}
</button>
</div> */
}
