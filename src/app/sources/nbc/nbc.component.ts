import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../fetch.component';

@Component({
  selector: 'app-nbc',
  templateUrl: './nbc.component.html',
  styleUrls: ['./nbc.component.css']
})
export class NbcComponent  {

  events$: any
  constructor(private eventData: FetchData){

  
    this.events$ = this.eventData.fetchNbc();
  }
}

