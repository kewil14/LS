import { DataStateEnum } from "src/app/core/config/data.state.enum";
import { Pharmacy } from "../../shared/models/modal-institution/pharmacy.modal";
import { Hopital } from "../../shared/models/modal-institution/hopital.modal";
import { Institution } from "../../shared/models/modal-institution/institution.modal";

export interface InstitutionState {
  institution: Institution,
  pharmacy: Pharmacy,
  hopital: Hopital,
  dataState: DataStateEnum,
  messages: string[]
}
