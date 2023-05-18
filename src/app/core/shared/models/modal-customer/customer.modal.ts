
export abstract class Customer {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public birthday?: Date,
        public countryOfBirth?: string,
        public gender?: string,
        public cityOfBirth?: string,
        public nationality?: string,
        public maritalSituation?: string,
        public langKey?: string,
        public email?: string,
        public phoneNumber?: string,
        public postalBox?: string,
        public avatar?: string,
    ) { }
}