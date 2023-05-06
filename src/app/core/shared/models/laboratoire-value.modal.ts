import { TypeLaboratoire } from "./type-laboratoire.modal";

export class LaboratoireValue {
  constructor(
    public id?: number,
    public code?: string,
    public libelleEn?: string,
    public libelleFr?: string,
    public type?: TypeLaboratoire
  ) { }
}
