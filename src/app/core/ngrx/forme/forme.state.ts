import { DataStateEnum } from "../../config/data.state.enum";
import { Forme } from "../../shared/models/forme.modal";

export interface FormeState {
  formes: Forme[],
  forme: Forme,
  dataState: DataStateEnum,
  messages: string[]
}
