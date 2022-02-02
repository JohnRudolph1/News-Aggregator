import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.component';

@Component({
  selector: 'app-msnbc',
  templateUrl: './msnbc.component.html',
  styleUrls: ['./msnbc.component.css']
})
export class MsnbcComponent  {

  events$
    constructor(private eventData: FetchData){}
  
    fetchMsnbc() {
      this.events$ = this.eventData.fetchMsnbc();
    }
}

