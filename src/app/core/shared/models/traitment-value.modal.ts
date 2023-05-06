import { TypeTraitment } from "./type-traitment.modal";

export class TraitmentValue {
  constructor(
    public id?: number,
    public code?: string,
    public libelleEn?: string,
    public libelleFr?: string,
    public descriptionFr?: string,
    public descriptionEn?: string,
    public type?: TypeTraitment
  ) { }
}
