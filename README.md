Overview
A simple PCF control that showcases an N step dialog experience, based out of React ‘Context sharing’ concepts.

Getting Started
• Check out basics of PowerApps Component framework
• Download the source code and run npm install
• Run npm start

Custom Dependencies
	The stepper and N step wizard experience used in the PCF have been published as isolated React packages on NPM, to enable their utilization elsewhere.
• multistep-wizard-fluent
• vertical-stepper-nav

Usage
• The PCF exposes an N step dialog which opens up on a button click and is controlled by state.
• Each step in the wizard is configured to display a react component with a custom label.
• The PCF uses the default stepper and footer exposed by the multistep-wizard-fluent Nuget package. Instead, a custom implementation of stepper and footer can also be passed to the wizard.
• A cache provider that wraps all the components in the dialog is used to maintain a shared cache context whose data can be read/updated by any of those components.
• The NavContext exposed by the multistep-wizard-fluent package can also be accessed from any component to read/update the active step information.







