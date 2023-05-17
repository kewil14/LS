import { DataStateEnum } from "../../config/data.state.enum";
import { TypeAllergie } from "../../shared/models/type-allergie.modal";

export interface TypeAllergieState {
  typeAllergies: TypeAllergie[],
  typeAllergie: TypeAllergie,
  dataState: DataStateEnum,
  messages: string[]
}
