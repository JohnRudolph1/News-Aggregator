import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../fetch.component';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.css']
})
export class CnnComponent  {

  events$: any
  constructor(private eventData: FetchData){

  
    this.events$ = this.eventData.fetchCnn();
  }
}

