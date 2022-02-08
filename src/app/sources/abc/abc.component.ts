import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchData } from '../../fetch.component';



@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent{

  events$: any
  constructor(private eventData: FetchData){

  
    this.events$ = this.eventData.fetchAbc();
  }
}

