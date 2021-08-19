import classes from "./WizardRow.module.scss";

interface PropsTypeInterface {
  percentage: number;
}

function WizardRow(props: PropsTypeInterface) {
  return (
    <div className={classes.WizardRowContainer}>
      <div
        className={classes.WizardRowFilled}
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  );
}

export default WizardRow;
