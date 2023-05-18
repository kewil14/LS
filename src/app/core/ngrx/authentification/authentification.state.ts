import { DataStateEnum } from "../../config/data.state.enum";
import { AuthentificationDto } from "../../shared/dto/authentification-dto.modal";

export interface AuthentificationState{
    dataState: DataStateEnum,
    authentificationDto: AuthentificationDto,
    messages: string[],
}