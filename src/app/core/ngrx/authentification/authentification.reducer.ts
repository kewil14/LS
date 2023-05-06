import { Action, createReducer, on } from "@ngrx/store";
import { DataStateEnum } from "../../config/data.state.enum";
import { connexion, connexionOk, erreursAuthentification, resetPassword,
    resetPasswordAction, resetPasswordActionOk, resetPasswordOk,
    activateAccount, activateAccountOk
} from "./authentification.actions";
import { AuthentificationState } from "./authentification.state";


const initState: AuthentificationState = {
    dataState: DataStateEnum.INITIAL,
    authentificationDto: {},
    messages: []
}

const reducer = createReducer(initState,
    on(erreursAuthentification, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
    on(connexionOk, resetPasswordOk, resetPasswordActionOk, activateAccountOk, (state) => ({...state, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(connexion, resetPassword, resetPasswordAction, activateAccount, (state) => ({...state, dataState: DataStateEnum.LOADING})),
)

export function AuthentificationReducer(
    state: AuthentificationState | undefined,
    action: Action
): AuthentificationState {
    return reducer(state, action);
}
  