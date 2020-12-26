const TimeLabel: React.FC<TimeLabelProps> = ({ description, time }) => {
  const dispTime = time?.toLocaleString("ja") ?? "-";
  return (
    <div>
      <p>{description}</p>
      <p>{dispTime}</p>
    </div>
  );
};

export default TimeLabel;

export interface TimeLabelProps {
  description: string;
  time?: Date;
}
