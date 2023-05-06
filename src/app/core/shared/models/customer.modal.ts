import { Address } from "./address.modal";

export class Customer{
    constructor(
        public id?: number,
        public firstname?: string,
        public lastname?: string,
        public sexe?: string,
        public image?: string,
        public date?: Date,
        public address?: Address
    ) {}
}