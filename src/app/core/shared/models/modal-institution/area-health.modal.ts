import { DistrictHealth } from "./district-health.modal";

export class AreaHealth {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
        public districthealth?: DistrictHealth
    ) {}
}
