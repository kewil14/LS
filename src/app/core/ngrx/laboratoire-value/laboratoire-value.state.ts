import { DataStateEnum } from "../../config/data.state.enum";
import { LaboratoireValue } from "../../shared/models/laboratoire-value.modal";

export interface LaboratoireValueState {
  laboratoireValues: LaboratoireValue[],
  laboratoireValue: LaboratoireValue,
  dataState: DataStateEnum,
  messages: string[]
}
