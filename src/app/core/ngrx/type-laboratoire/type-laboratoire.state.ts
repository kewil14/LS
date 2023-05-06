import { DataStateEnum } from "../../config/data.state.enum";
import { TypeLaboratoire } from "../../shared/models/type-laboratoire.modal";

export interface TypeLaboratoireState {
  typeLaboratoires: TypeLaboratoire[],
  typeLaboratoire: TypeLaboratoire,
  dataState: DataStateEnum,
  messages: string[]
}
