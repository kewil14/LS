import { TypeAntecedent } from "./type-antecedent.modal";

export class AntecedentValue {
  constructor(
    public id?: number,
    public code?: string,
    public libelleEn?: string,
    public libelleFr?: string,
    public type?: TypeAntecedent
  ) { }
}
