
export class AuthentificationDto {
    constructor(
        public access_token?: string,
        public expires_in?: number,
        public refresh_expires_in?: number,
        public refresh_token?: string,
        public token_type?: string,
        public code?: string,
        public secret?: string,
    ) {}
}
