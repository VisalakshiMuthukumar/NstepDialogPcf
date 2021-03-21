import * as React from "react";
import { CacheContext } from "../Cache/CacheContext";
import { INStepProps } from "../types";
import { Wizard, Stepper, Footer } from "multistep-wizard-fluent";
import PersonalDetails from "./PersonalDetails";
import AddressInfo from "./AddressInfo";
import Review from "./Review";

const NStepDialog = ({ pcfContext, isOpen, setIsOpen }: INStepProps) => {
  const { shouldDisableNext } = React.useContext(CacheContext);
  return (
    <Wizard
      isOpen={isOpen}
      containerType={0}
      steps={[
        {
          label: "Personal Details",
          element: React.createElement(PersonalDetails),
        },
        {
          label: "Address info",
          element: React.createElement(AddressInfo),
        },
        {
          label: "Review",
          element: React.createElement(Review),
        },
      ]}
      Stepper={Stepper}
      Footer={<Footer shouldDisableNext={shouldDisableNext} />}
      headerText={"N step dialog"}
      onDismiss={() => setIsOpen(false)}
    />
  );
};

export default NStepDialog;
