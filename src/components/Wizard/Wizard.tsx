import classes from "./Wizard.module.scss";

import WizardStep from "../WizardStep";
import WizardRow from "../WizardRow";

interface PropsTypeInterface {
  tabs: Array<string>;
  index: number;
}

export const MIN_TABS = 2;
export const MAX_TABS = 5;

function Wizard(props: PropsTypeInterface) {
  if (props.tabs.length < MIN_TABS || props.tabs.length > MAX_TABS) {
    return null;
  }

  const lastIndex = props.tabs.length - 1;
  const percentage = (props.index * 100) / lastIndex;

  return (
    <div className={classes.WizardContainer}>
      <div className={classes.WizardWrapper}>
        <div className={classes.WizardTabs}>
          {props.tabs.map((tab: string, i: number) => (
            <WizardStep
              key={`WizardStep-${i}-${tab}`}
              title={tab}
              isActive={i <= props.index}
            />
          ))}
        </div>

        <div className={classes.WizardPercentage}>
          <WizardRow percentage={percentage} />
        </div>
      </div>
    </div>
  );
}

export default Wizard;
