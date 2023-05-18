import { DataStateEnum } from "../../config/data.state.enum";
import { IntrantValue } from "../../shared/models/intrant-value.modal";

export interface IntrantValueState {
  intrantValues: IntrantValue[],
  intrantValue: IntrantValue,
  dataState: DataStateEnum,
  messages: string[]
}
