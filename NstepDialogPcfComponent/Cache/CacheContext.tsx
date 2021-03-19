import * as React from "react";
import { IInputs } from "../generated/ManifestTypes";

export interface ICacheValue {
  name: string | null;
  address: string | null;
  activeStage: number;
}

export interface ICacheContext {
  cacheValue: ICacheValue | undefined;
  setCacheValue: any;
  crmContext: ComponentFramework.Context<IInputs>;
  shouldDisableNext: () => boolean;
}

export const CacheContext = React.createContext<ICacheContext>({
  crmContext: {} as ComponentFramework.Context<IInputs>,
  cacheValue: undefined,
  setCacheValue: () => {
    // initializing to an empty function
  },
  shouldDisableNext: () => true,
});
