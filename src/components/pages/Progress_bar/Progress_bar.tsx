import React from "react";

interface IProps {
  bgcolor: string;
  progress: string;
  height: number;
}

const Progress_bar: React.FC<IProps> = ({
  bgcolor,
  progress,
  height,
}): JSX.Element => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: "0.75rem",
    margin: "1rem",
    boxShadow: "3px 5px 20px 2px #777",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: "0.75rem",
    textAlign: "right",
  };

  const progresstext = {
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      {/*@ts-ignore*/}
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;
