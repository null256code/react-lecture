import React from "react";
import "./App.css";
import TimeLabel from "./TimeLabel";

function App() {
  const [time, setTime] = React.useState<Date | undefined>();
  const handleClick = () => {
    setTime(new Date());
  };
  return (
    <>
      <TimeLabel description={"今の時間です"} time={time} />
      <input type="button" value="時間を表示" onClick={(e) => handleClick()} />
    </>
  );
}

export default App;
