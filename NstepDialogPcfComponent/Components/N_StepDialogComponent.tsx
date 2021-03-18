import React = require("react");
import { CacheContext } from "../Cache/CacheContext";
import { INStepProps } from "../types";
import { Wizard, Stepper, Footer } from "multistep-wizard-fluent";
import PersonalDetailsComponent from "./PersonalDetails";
import AddressInfoComponent from "./AddressInfo";
import ReviewComponent from "./Review";

const N_StepDialogComponent = ({pcfContext, isOpen, setIsOpen}: INStepProps) => {
    const { shouldDisableNext } = React.useContext(CacheContext);
    return (
        <Wizard
        isOpen={isOpen}
        containerType={0}
        steps={[
            {
            label: "Personal Details",
            element: React.createElement(PersonalDetailsComponent)
            },
            {
            label: "Address info",
            element: React.createElement(AddressInfoComponent)
            },
            {
            label: "Review",
            element: React.createElement(ReviewComponent)
            }
        ]}
        Stepper={Stepper}
        Footer={<Footer shouldDisableNext={shouldDisableNext} />}
        headerText={"N step dialog"}
        onDismiss={() => setIsOpen(false)}
        />
      );
}

export default N_StepDialogComponent;