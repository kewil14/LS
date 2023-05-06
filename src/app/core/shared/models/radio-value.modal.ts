import { TypeRadio } from "./type-radio.modal";

export class RadioValue {
  constructor(
    public id?: number,
    public code?: string,
    public libelleEn?: string,
    public libelleFr?: string,
    public type?: TypeRadio
  ) { }
}
