import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  description: {
    fontSize: 28,
    fontWeight: 700,
  },
  time: {
    fontSize: 18,
    padding: "4px",
    width: 200,
    border: "dotted 1px #AAAAAA",
  },
});

const TimeLabel: React.FC<TimeLabelProps> = ({ description, time }) => {
  const dispTime = time?.toLocaleString("ja") ?? "-";
  const classes = useStyles();
  return (
    <Box margin={"16px"}>
      <Typography className={classes.description}>{description}</Typography>
      <Typography className={classes.time}>{dispTime}</Typography>
    </Box>
  );
};

export default TimeLabel;

export interface TimeLabelProps {
  description: string;
  time?: Date;
}
