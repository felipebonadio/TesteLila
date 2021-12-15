import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Card } from '../contracts/card';
import { Router } from '@angular/router';
import { shuffle } from '../utils/shuffle';
import { cards } from '../providers/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public cards: Card[];

  public table: Card[];
  public hand: Card[] = [];

  constructor(private router: Router) {
    this.cards = shuffle(cards);
    this.table = [];
    this.updateTable();
  }

  updateTable() {
    for (let index = 0; index <= 5; index++) {
      if (this.cards[index] == undefined) {
        break;
      }
      this.table[index] = this.cards[index];
    }
  }

  drop(event: CdkDragDrop<Card[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (event.previousContainer.data === this.table) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        if (this.cards.length > 0) {
          this.cards.splice(event.previousIndex, 1);
        }
      }
    }
    if (cards.length > 0) {
      this.updateTable();
    }
  }
}
