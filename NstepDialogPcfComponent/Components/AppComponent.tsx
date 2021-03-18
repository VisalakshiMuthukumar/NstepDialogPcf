import * as React from "react";
import { PrimaryButton } from "@fluentui/react";
import { CacheProvider } from "../Cache/CacheProvider";
import { AppProps, INStepProps } from "../types";
import N_StepDialogComponent from "./N_StepDialogComponent";

export const AppComponent = ({pcfContext}: AppProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div>
        <CacheProvider crmContext={pcfContext}>
            <PrimaryButton onClick={() => setIsOpen(true)}>
            {"Open N-step"}
            </PrimaryButton>
            <N_StepDialogComponent pcfContext={pcfContext} isOpen={isOpen} setIsOpen={setIsOpen}></N_StepDialogComponent>
        </CacheProvider>
      </div>
    );
  }