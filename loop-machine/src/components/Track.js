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
        backgroundColor: style,
        width: "40%",
        height: "20%",
        m: 2,
      }}
    >
      <Box sx={{ m: 1 }}>
        <CardContent>
         
          <p className="trackTitle">Track: {title}</p>
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


