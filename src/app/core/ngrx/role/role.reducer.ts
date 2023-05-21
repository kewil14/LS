import { DataStateEnum } from "../../config/data.state.enum";
import { RoleState } from "./role.state";
import { setRole, deleteRole, addRole, loadRole, erreurRoles,findRoleByUser,
    findAllRoles, findRoleByIdRef, findRoleByType,
    findRoleById, createRoleAdmin, updateRole, findAllAuthorities, loadAuthorities
} from './role.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Role } from "../../shared/models/modal-role/role.modal";

const initState: RoleState = {
    dataState: DataStateEnum.INITIAL,
    role: {},
    roles: [],
    authorities: [],
    messages: [],
}

const reducer = createReducer(initState,
    on(setRole, (state, {role}) => {
      let roles = [...state.roles];
      let list: Array<Role> = roles.filter((item) => item.name != role.name);
      list.push(role)
      return {...state, roles: list, role: role, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(deleteRole, (state, {role}) => {
      let roles = [...state.roles];
      let list: Array<Role> = roles.filter((item) => item.name != role.name);
      return {...state, roles: list, role: role, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(addRole, (state, {role}) => {
      let roles = [...state.roles];
      roles.push(role);
      return {...state, roles: roles, role: role, messages: []};
    }),
    on(loadRole, (state, {roles}) => ({...state, roles: roles, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(loadAuthorities, (state, {authorities}) => ({...state, authorities: authorities, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(erreurRoles, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),

    on(findRoleByUser,
    findAllRoles, findRoleByIdRef, findRoleByType, findAllAuthorities,
    findRoleById, createRoleAdmin, updateRole, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
  );
  
  export function rolesReducer(
    state: RoleState | undefined,
    action: Action
  ): RoleState {
    return reducer(state, action);
  }