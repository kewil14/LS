import { Customer } from "./customer.modal";

export class User extends Customer{
    constructor(
        public userId?: string,
        public institutionId?: string,
        public login?: string
    ) {
        super();
    }
}

