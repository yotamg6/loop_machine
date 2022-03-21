const Track = ({ track: { title, isMuted }, index, onMutePress, style }) => {
  return (
    <div style={style}>
      <p>{`Track: ${title} -- isMuted ${isMuted}`}</p>
      <button onClick={() => onMutePress(index)}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default Track;
