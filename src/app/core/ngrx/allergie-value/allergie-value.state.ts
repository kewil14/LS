import { DataStateEnum } from "../../config/data.state.enum";
import { AllergieValue } from "../../shared/models/allergie-value.modal";

export interface AllergieValueState {
  allergieValues: AllergieValue[],
  allergieValue: AllergieValue,
  dataState: DataStateEnum,
  messages: string[]
}
