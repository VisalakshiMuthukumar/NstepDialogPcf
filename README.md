## Overview
A simple React based PCF control that showcases an N step dialog experience where data is effectively cached and shared among components via context sharing.

## Getting Started
- Check out basics of [PowerApps Component framework](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview)
- Download the source code and run npm install
- Run npm start

## Custom Dependencies
The stepper and N step wizard experience used in the PCF have been published as isolated React packages on NPM, to enable their utilization elsewhere.
- [multistep-wizard-fluent](https://www.npmjs.com/package/multistep-wizard-fluent)
- [vertical-stepper-nav](https://www.npmjs.com/package/vertical-stepper-nav)

## Usage
- The PCF exposes an N step dialog which opens up on a button click and is controlled by state.
- Each step in the wizard is configured to display a react component with a custom label.
- The PCF uses the default stepper and footer exposed by the *multistep-wizard-fluent* Nuget package.
- A cache provider that wraps all the components in the dialog is used to maintain a shared cache context whose data can be read/updated by any of those components through React hooks.
- The NavContext exposed by the *multistep-wizard-fluent* package can also be accessed from any component to read/update the active step information.

## Extensibility
- Custom implementations of the stepper and footer components can also be passed to the wizard. Please refer the github repos for the default [multistep-wizard-fluent](https://github.com/priyankark/multistep-wizard-fluent/tree/main/src) and [vertical-stepper-nav](https://github.com/priyankark/vertical-stepper-nav) packages used in this PCF.
- The data captured in the dialog can be bound to CRM either through parameters or using WebAPI calls.







