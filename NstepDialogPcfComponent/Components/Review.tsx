import * as React from "react";
import { NavContext } from "multistep-wizard-fluent";
import { Link, Stack } from "office-ui-fabric-react";
import { CacheContext } from "../Cache/CacheContext";
import AddressInfo from "./AddressInfo";
import PersonalDetails from "./PersonalDetails";

const Review = () => {
  const navContext = React.useContext(NavContext);
  const jumpToStep = (step: number) => {
    navContext.setStepDetails({ currentPageIndex: step });
  };
  const { cacheValue, setCacheValue } = React.useContext(CacheContext);
  React.useEffect(() => {
    setCacheValue({
      ...cacheValue,
      activeStage: navContext.stepDetails.currentPageIndex,
    });
  }, [navContext.stepDetails.currentPageIndex]);

  return (
    <>
      <div>
        Step {navContext.stepDetails.currentPageIndex + 1}: Please review the
        details entered
      </div>
      <Stack tokens={{ childrenGap: 150 }} horizontal={true}>
        <Stack.Item>
          <PersonalDetails readOnly={true} />
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
          <AddressInfo readOnly={true} />
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
