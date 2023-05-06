import { DataStateEnum } from "../../config/data.state.enum";
import { TypeTraitment } from "../../shared/models/type-traitment.modal";

export interface TypeTraitmentState {
  typeTraitments: TypeTraitment[],
  typeTraitment: TypeTraitment,
  dataState: DataStateEnum,
  messages: string[]
}
