import { DataStateEnum } from "../../config/data.state.enum";
import { Role } from "../../shared/models/modal-role/role.modal";

export interface RoleState{
    dataState: DataStateEnum,
    role: Role,
    roles: Role[],
    messages: string[],
}
