import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Card } from '../contracts/card';
import { Router } from '@angular/router';
import { shuffle } from "../utils/shuffle";
import { cards } from '../providers/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public cards: Card[];

  public table: string[];
  public hand: string[] = [];

  constructor(private router: Router, private httpClient: HttpClient) {
    this.cards = cards;
    this.table = this.getCards();
  }

  private getCards(): string[] {
    return shuffle(cards.map(card => [card.tipo, card.descricao, card.pontos, card.coracoesPeq, card.coracoesGr, card.bonus]));  
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  randomize(): void {
    this.table = this.getCards().filter((card) => this.hand.includes(card) === false);
  }
  
}
