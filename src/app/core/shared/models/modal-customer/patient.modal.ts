import { Customer } from './customer.modal';

export class Patient extends Customer{
    constructor(
        public profession?: string,
        public numReciept?: string,
        public numImmatricution?: string,
        public professionalStatut?: string,
        public contacts?: Array<Customer>,
        public positionFolder?: string,
        public positionStatus?: string,
        public kitId?: any,
        public enrolDate?: any,
    ) {
        super();
    }
}