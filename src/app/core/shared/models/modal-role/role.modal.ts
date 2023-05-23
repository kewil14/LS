export class Role {
    constructor(
        public name?: string,
        public descriptionFr?: string,
        public descriptionEn?: string,
        public roles?: Role[]
    ){}
}
