import { ToggleButtonDispatchType } from "__types__/typeUtils/base.types";

export type ThemesStateType = {
  [key: string]: boolean;
};

export type ProviderValueType = { themes: ThemesStateType; toggleDarkTheme: ToggleButtonDispatchType } | undefined