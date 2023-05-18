import { DataStateEnum } from "../../config/data.state.enum";
import { Categorie } from "../../shared/models/categorie.modal";

export interface CategorieState {
  categories: Categorie[],
  categorie: Categorie,
  dataState: DataStateEnum,
  messages: string[]
}
