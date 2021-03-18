import { NavContext } from "multistep-wizard-fluent";
import { Label } from "office-ui-fabric-react";
import React = require("react");
import { CacheContext } from "../Cache/CacheContext";
import { ScreenProps } from "../types";

const AddressInfoComponent = ({readOnly}: ScreenProps) => {
    const {cacheValue, setCacheValue} = React.useContext(
        CacheContext,
      );
    const navContext = React.useContext(NavContext);
    React.useEffect(() => {
        setCacheValue({
            ...cacheValue,
            activeStage: navContext.stepDetails.currentPageIndex
        });
    },[navContext.stepDetails.currentPageIndex]);
    return (
        <>
            {
                !readOnly && (
                <div>
                    Hi {cacheValue?.name}!!!
                    <br />
                    Step {navContext.stepDetails.currentPageIndex + 1}: Please Enter your Address Info
                </div>
                )
            }
            <Label>Address</Label>
            <textarea
                placeholder={'Enter your address'}
                value={cacheValue?.address ?? ''}
                onChange={(e) => {
                setCacheValue({...cacheValue, address: e.target.value});
                }}
                disabled={readOnly}
                rows={4}
                cols={50}
            />
        </>
    );
}

export default AddressInfoComponent;