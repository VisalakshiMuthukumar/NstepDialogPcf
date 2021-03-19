import * as React from "react";
import { PrimaryButton } from "@fluentui/react";
import { CacheProvider } from "../Cache/CacheProvider";
import { AppProps } from "../types";
import NStepDialog from "./NStepDialog";

export const App = ({ pcfContext }: AppProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <CacheProvider crmContext={pcfContext}>
        <PrimaryButton onClick={() => setIsOpen(true)}>
          {"Open N-step"}
        </PrimaryButton>
        <NStepDialog
          pcfContext={pcfContext}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></NStepDialog>
      </CacheProvider>
    </div>
  );
};
