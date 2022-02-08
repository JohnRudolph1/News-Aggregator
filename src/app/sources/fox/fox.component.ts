import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../fetch.component';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent {
  events$: any
  constructor(private eventData: FetchData){

  
    this.events$ = this.eventData.fetchFox();
  }
}
