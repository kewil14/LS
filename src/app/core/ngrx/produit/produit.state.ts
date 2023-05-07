import { DataStateEnum } from "../../config/data.state.enum";
import { Produit } from "../../shared/models/produit.modal";

export interface ProduitState {
  produits: Produit[],
  produit: Produit,
  dataState: DataStateEnum,
  messages: string[]
}
