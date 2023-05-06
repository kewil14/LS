import { DataStateEnum } from "../../config/data.state.enum";
import { AntecedentValue } from "../../shared/models/antecedent-value.modal";

export interface AntecedentValueState {
  antecedentValues: AntecedentValue[],
  antecedentValue: AntecedentValue,
  dataState: DataStateEnum,
  messages: string[]
}
