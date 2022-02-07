import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../fetch.component';

@Component({
  selector: 'app-nyt',
  templateUrl: './nyt.component.html',
  styleUrls: ['./nyt.component.css']
})
export class NytComponent  {

  events$
  constructor(private eventData: FetchData){}

  fetchNyt() {
    this.events$ = this.eventData.fetchNyt();
  }
}
