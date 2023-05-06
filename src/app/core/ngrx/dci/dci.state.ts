import { DataStateEnum } from "../../config/data.state.enum";
import { Dci } from "../../shared/models/dci.modal";

export interface DciState {
  dcis: Dci[],
  dci: Dci,
  dataState: DataStateEnum,
  messages: string[]
}
