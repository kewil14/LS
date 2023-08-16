import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-scratch',
  templateUrl: './scratch.component.html',
  styleUrls: ['./scratch.component.scss']
})
export class ScratchComponent implements OnInit{
  
  images: any[] = [
    {num: 1},{num: 2},{num: 3},{num: 4},
    {num: 5},{num: 6},{num: 7},{num: 8},
    {num: 1},{num: 2},{num: 3},{num: 4},
    {num: 5},{num: 6},{num: 7},{num: 8},
  ]
  cards: any = document.querySelectorAll(".card");
  
  ngOnInit(): void {
    console.log(this.cards);
    this.flipCard;
  }
  // on va tester la validite de deux cartes
    cardOne!: any;
    cardTwo!: any;
    flipCard(e: any): any{
    let clickedCard = e.target;//recuperer la carte sur laquelle l utilisateur click
 
    clickedCard.classList.add("flip");
    if(!this.cardOne){
      return this.cardOne = clickedCard;
    }
     this.cardTwo = clickedCard;
    console.log(this.cardOne, this.cardTwo);
  }


}
