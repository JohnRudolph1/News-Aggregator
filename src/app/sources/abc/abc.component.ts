import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchData } from '../../fetch.component';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent {

  events$;
    constructor(private newsData: FetchData){}
  
    fetchAbc() {
      this.events$ = this.newsData.fetchAbc();
    }
}
