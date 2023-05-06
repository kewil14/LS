import { DataStateEnum } from "../../config/data.state.enum";
import { Dci } from "../../shared/models/dci.modal";

export interface DciState {
  Dcis: Dci[],
  Dci: Dci,
  dataState: DataStateEnum,
  messages: string[]
}
