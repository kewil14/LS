import { DataStateEnum } from "../../config/data.state.enum";
import { TypeAntecedent } from "../../shared/models/type-antecedent.modal";

export interface TypeAntecedentState {
  typeAntecedents: TypeAntecedent[],
  typeAntecedent: TypeAntecedent,
  dataState: DataStateEnum,
  messages: string[]
}
