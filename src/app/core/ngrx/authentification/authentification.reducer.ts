import { Action, createReducer, on } from "@ngrx/store";
import { DataStateEnum } from "../../config/data.state.enum";
import { connexion, connexionOk, erreursAuthentification, resetPassword,
    resetPasswordOk
} from "./authentification.actions";
import { AuthentificationState } from "./authentification.state";


const initState: AuthentificationState = {
    dataState: DataStateEnum.INITIAL,
    authentificationDto: {},
    messages: []
}

const reducer = createReducer(initState,
    on(erreursAuthentification, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
    on(connexionOk, resetPasswordOk, (state) => ({...state, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(connexion, resetPassword, (state) => ({...state, dataState: DataStateEnum.LOADING})),
)

export function AuthentificationReducer(
    state: AuthentificationState | undefined,
    action: Action
): AuthentificationState {
    return reducer(state, action);
}
  