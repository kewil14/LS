import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { findProduitById } from 'src/app/core/ngrx/produit/produit.actions';
import { Produit } from 'src/app/core/shared/models/produit.modal';

@Component({
  selector: 'health-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit{

  @Input() product$!: BehaviorSubject<{produit: Produit}>;
  @Input() loading$!: BehaviorSubject<boolean>;

  constructor(){}

  ngOnInit(): void {
    this.product$.subscribe(d =>{this.showProduit(d.produit)});
  }

  showProduit(produit: Produit): void{
    id: produit.id;
    libelle: produit.libelle;
    dosage: produit.dosage;
  }
}
