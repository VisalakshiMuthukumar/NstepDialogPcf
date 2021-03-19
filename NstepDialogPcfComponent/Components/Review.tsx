import * as React from "react";
import { NavContext } from "multistep-wizard-fluent";
import { Link, Stack } from "office-ui-fabric-react";
import { CacheContext } from "../Cache/CacheContext";
import AddressInfoComponent from "./AddressInfo";
import PersonalDetailsComponent from "./PersonalDetails";

const Review = () => {
  const { cacheValue, setCacheValue } = React.useContext(CacheContext);
  const navContext = React.useContext(NavContext);
  React.useEffect(() => {
    setCacheValue({
      ...cacheValue,
      activeStage: navContext.stepDetails.currentPageIndex,
    });
  }, [navContext.stepDetails.currentPageIndex]);
  const jumpToStep = (step: number) => {
    navContext.setStepDetails({ currentPageIndex: step });
  };

  return (
    <>
      <div>
        Step {navContext.stepDetails.currentPageIndex + 1}: Please review the
        details entered
      </div>
      <Stack tokens={{ childrenGap: 150 }} horizontal={true}>
        <Stack.Item>
          <PersonalDetailsComponent readOnly={true} />
        </Stack.Item>
        <Stack.Item>
          <Link
            onClick={() => {
              jumpToStep(0);
            }}
          >
            Edit
          </Link>
        </Stack.Item>
      </Stack>
      <Stack tokens={{ childrenGap: 10 }} horizontal={true}>
        <Stack.Item>
          <AddressInfoComponent readOnly={true} />
        </Stack.Item>
        <Stack.Item>
          <Link
            onClick={() => {
              jumpToStep(1);
            }}
          >
            Edit
          </Link>
        </Stack.Item>
      </Stack>
    </>
  );
};

export default Review;
