const Controls = ({ currentPosition, duration }) => {
  return (
    <>
      <div className="progress">
        <div
          className="bar"
          style={{
            width: `${(currentPosition / duration) * 100}%`,
          }}
        ></div>
      </div>
    </>
  );
};
export default Controls;
