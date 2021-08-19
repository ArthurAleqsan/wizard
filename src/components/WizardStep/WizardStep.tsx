import classes from "./WizardStep.module.scss";

interface PropsTypeInterface {
  title: string;
  isActive: boolean;
}

function WizardStep(props: PropsTypeInterface) {
  const cssClasses = props.isActive
    ? classes.WizardStepContainerActive
    : classes.WizardStepContainer;

  return (
    <div className={cssClasses}>
      <div className={classes.WizardStepTitle}>{props.title}</div>
      <div className={classes.WizardStepPoint} />
    </div>
  );
}

export default WizardStep;
