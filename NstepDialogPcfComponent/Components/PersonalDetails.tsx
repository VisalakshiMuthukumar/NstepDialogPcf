import * as React from "react";
import { NavContext } from "multistep-wizard-fluent";
import { TextField } from "office-ui-fabric-react";
import { CacheContext } from "../Cache/CacheContext";
import { ScreenProps } from "../types";

const PersonalDetails = ({ readOnly }: ScreenProps) => {
  const { cacheValue, setCacheValue } = React.useContext(CacheContext);
  const navContext = React.useContext(NavContext);
  React.useEffect(() => {
    setCacheValue({
      ...cacheValue,
      activeStage: navContext.stepDetails.currentPageIndex,
    });
  }, [navContext.stepDetails.currentPageIndex]);
  return (
    <>
      {!readOnly && (
        <div>
          Step {navContext.stepDetails.currentPageIndex + 1}: Please Enter your
          Personal Details
        </div>
      )}
      <TextField
        label="Name"
        required
        placeholder={"Enter your name"}
        value={cacheValue?.name ?? ""}
        onChange={(event, newValue) => {
          setCacheValue({ ...cacheValue, name: newValue });
        }}
        validateOnLoad={false}
        validateOnFocusOut={true}
        onGetErrorMessage={(value: string) =>
          !value ? "This field is required!" : ""
        }
        readOnly={readOnly}
      />
    </>
  );
};

export default PersonalDetails;
