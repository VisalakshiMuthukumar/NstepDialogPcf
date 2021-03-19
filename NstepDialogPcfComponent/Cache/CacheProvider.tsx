import * as React from "react";
import { CacheContext, ICacheValue } from "./CacheContext";
import { IInputs } from "../generated/ManifestTypes";

interface ICacheProviderProps {
  crmContext: ComponentFramework.Context<IInputs>;
}

export const CacheProvider: React.FunctionComponent<ICacheProviderProps> = (
  props
) => {
  const [cacheValue, setCacheValue] = React.useState<ICacheValue | undefined>(
    undefined
  );
  const shouldDisableNext = () => {
    // Custom checks to enable/disable stage movement go here
    return (
      cacheValue?.activeStage === 0 && !cacheValue?.name // Disable next button if user is on stage 1 and name field is empty
    );
  };

  return (
    <CacheContext.Provider
      value={{
        cacheValue: cacheValue,
        setCacheValue,
        crmContext: props.crmContext,
        shouldDisableNext,
      }}
    >
      {props.children}
    </CacheContext.Provider>
  );
};
