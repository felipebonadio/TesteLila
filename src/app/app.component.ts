import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { Card } from './card';
import { Router } from '@angular/router';
import { cards } from './cards';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  constructor(private router: Router, private httpClient: HttpClient) {
    this.card = {} as Card;
  }

  cards: any =[];

  card: Card;

  mesa = ['Carta 1', 'Carta 2', 'Carta 3', 'Carta 4', 'Carta 5', 'Carta 6'];

  mao = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
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

}