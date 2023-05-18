import { DataStateEnum } from "../../config/data.state.enum";
import { Famille } from "../../shared/models/famille.modal";

export interface FamilleState {
  familles: Famille[],
  famille: Famille,
  dataState: DataStateEnum,
  messages: string[]
}
