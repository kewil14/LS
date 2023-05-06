import { DataStateEnum } from "../../config/data.state.enum";
import { TraitmentValue } from "../../shared/models/traitment-value.modal";

export interface TraitmentValueState {
  traitmentValues: TraitmentValue[],
  traitmentValue: TraitmentValue,
  dataState: DataStateEnum,
  messages: string[]
}
