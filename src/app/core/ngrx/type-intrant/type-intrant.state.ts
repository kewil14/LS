import { DataStateEnum } from "../../config/data.state.enum";
import { TypeIntrant } from "../../shared/models/type-intrant.modal";

export interface TypeIntrantState {
  typeIntrants: TypeIntrant[],
  typeIntrant: TypeIntrant,
  dataState: DataStateEnum,
  messages: string[]
}
