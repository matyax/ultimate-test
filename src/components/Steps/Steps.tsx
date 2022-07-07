interface Props {
  current: number;
  total: number;
}

const Steps = ({ current, total }: Props) => {
  return (
    <div>
      {current} of {total}
    </div>
  );
};

export default Steps;
