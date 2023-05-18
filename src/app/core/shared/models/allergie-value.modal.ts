import { TypeAllergie } from "./type-allergie.modal";

export class AllergieValue {
  constructor(
    public id?: number,
    public code?: string,
    public libelleEn?: string,
    public libelleFr?: string,
    public type?: TypeAllergie
  ) { }
}
