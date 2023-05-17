import { DataStateEnum } from "../../config/data.state.enum";
import { TypeRadio } from "../../shared/models/type-radio.modal";

export interface TypeRadioState {
  typeRadios: TypeRadio[],
  typeRadio: TypeRadio,
  dataState: DataStateEnum,
  messages: string[]
}
