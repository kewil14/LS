import { DataStateEnum } from "../../config/data.state.enum";
import { RadioValue } from "../../shared/models/radio-value.modal";

export interface RadioValueState {
  radioValues: RadioValue[],
  radioValue: RadioValue,
  dataState: DataStateEnum,
  messages: string[]
}
