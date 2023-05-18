import { RoleItem } from "./role-item.module";

export class Role{
    constructor(
        public id?: number,
        public name?: string,
        public roles?:Array<RoleItem>
    ){}
}
