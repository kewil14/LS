import { Forme } from './forme.modal';
import { Categorie } from './categorie.modal';
import { Famille } from './famille.modal';
import { Dci } from './dci.modal';

export class Produit {
    constructor(
        public id?: number,
        public libelle?: string,
        public code?: string,
        public description?: string,
        public image?: string,
        public categorie?: Categorie,
        public forme?: Forme,
        public dosage?: string,
        public ordonnance?: string,
        public codeBar?: string,
        public families?: Array<Famille>,
        public dcis?: Array<Dci>
    ) {}
}
