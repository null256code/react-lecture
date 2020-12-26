import { Button } from "@material-ui/core";
import React from "react";
import TimeLabel from "../../TimeLabel";

const TimeConfirm: React.FC = () => {
  const [time, setTime] = React.useState<Date | undefined>();
  const handleClick = () => {
    setTime(new Date());
  };
  return (
    <>
      <TimeLabel description={"今の時間です"} time={time} />
      <Button variant="contained" onClick={(e) => handleClick()}>
        時間を表示
      </Button>
    </>
  );
};

export default TimeConfirm;
