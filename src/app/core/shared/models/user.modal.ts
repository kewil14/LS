import { Customer } from "./customer.modal";
import { Role } from "./role.module";

export class User{
    constructor(
        public id?: number,
        public username?: string,
        public password?: string,
        public isValid?: boolean,
        public customer?: Customer,
        public role?: Role
    ) {}
}

