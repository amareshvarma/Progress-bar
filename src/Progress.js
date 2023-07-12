import "../Progress.css";

const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ transform: `translateX(${progress - 100}%)` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
