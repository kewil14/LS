import { DataStateEnum } from "src/app/core/config/data.state.enum";
import { User } from "../../shared/models/modal-customer/user.modal";

export interface UserState {
  users: User[],
  user: User,
  dataState: DataStateEnum,
  messages: string[]
}
