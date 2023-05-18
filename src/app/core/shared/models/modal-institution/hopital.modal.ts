import { AreaHealth } from './area-health.modal';
import { Institution } from './institution.modal';
import { MedicalService } from './medical-service.modal';

export class Hopital extends  Institution{
    constructor(
        public services?: Array<MedicalService>,
        public areaHealth?: AreaHealth
    ) {
        super();
    }
}
