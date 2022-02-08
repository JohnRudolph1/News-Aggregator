import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../fetch.component';


@Component({
  selector: 'app-washington-post',
  templateUrl: './washington-post.component.html',
  styleUrls: ['./washington-post.component.css']
})
export class WashingtonPostComponent  {

  events$: any
  constructor(private eventData: FetchData){

  
    this.events$ = this.eventData.fetchWashingtonPost();
  }
}