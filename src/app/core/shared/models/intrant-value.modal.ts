import { TypeIntrant } from "./type-intrant.modal";

export class IntrantValue {
  constructor(
    public id?: number,
    public code?: string,
    public libelleEn?: string,
    public libelleFr?: string,
    public type?: TypeIntrant
  ) { }
}
