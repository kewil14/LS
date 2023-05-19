import { Action, createReducer, on } from '@ngrx/store';
import { setUser, dellUser, addUser, loadUser, erreurUsers,
  findUserByToken, findUserByInstitution,
} from './user.actions';
import { UserState } from './user.state';
import { DataStateEnum } from 'src/app/core/config/data.state.enum';
import { User } from '../../shared/models/modal-customer/user.modal';

const initState: UserState = {
  users: [],
  user: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setUser, (state, {user}) => {
    let users = [...state.users];
    let list: Array<User> = users.filter((item) => item.id != user.id);
    list.push(user)
    return {...state, users: list, user: user, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellUser, (state, {user}) => {
    let users = [...state.users];
    let list: Array<User> = users.filter((item) => item.id != user.id);
    return {...state, users: list, user: user, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addUser, (state, {user}) => {
    let users = [...state.users];
    users.push(user);
    return {...state, users: users, user: user, messages: []};
  }),
  on(loadUser, (state, {users}) => ({...state, users: users, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurUsers, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on(
    findUserByToken, findUserByInstitution, state => ({ ...state, dataState: DataStateEnum.INITIAL, messages: [] }))
);

export function usersReducer(
  state: UserState | undefined,
  action: Action
): UserState {
  return reducer(state, action);
}
