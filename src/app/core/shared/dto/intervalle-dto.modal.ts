
export class IntervalleDto {
    constructor(
        public serialVersionUID?: number,
        public type?: string,
        public option?: string,
        public start?: Date,
        public end?: Date
    ) {}
}