export type AppProps = {
  pcfContext: ComponentFramework.Context<any>;
};
export type INStepProps = {
  pcfContext: ComponentFramework.Context<any>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type ScreenProps = {
  readOnly?: boolean;
};

export type FooterProps = {
  shouldDisableNext: () => boolean;
};
