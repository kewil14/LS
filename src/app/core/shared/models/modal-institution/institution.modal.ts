
export abstract class Institution {
  constructor(
    public id?: number,
    public name?: string,
    public code?: string,
    public category?: string,
    public phoneNumber?: string,
    public siteWeb?: string,
    public status?: string,
    public description?: string,
    public email?: string,
    public logo?: string,
    public boitePostale?: string,
    public quarterCode?: string,
    public districtCode?: string,
    public departmentCode?: string,
    public regionCode?: string,
    public lattitude?: string,
    public longitude?: string,
    public type?: string,
  ) {}
}