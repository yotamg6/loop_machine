import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";

import Box from "@mui/material/Box";

const Track = ({ track: { title, isMuted }, index, onMutePress, style }) => {
  return (
    <Grid style={{ width: "40%", height: "25%" }}>
      <Card
        sx={{
          backgroundColor: style,
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
    </Grid>
  );
};

export default Track;
