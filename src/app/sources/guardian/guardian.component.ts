// import { Component, OnInit } from '@angular/core';
// import { FetchData } from '../fetch.component';

// @Component({
//   selector: 'app-guardian',
//   templateUrl: './guardian.component.html',
//   styleUrls: ['./guardian.component.css']
// })
// export class GuardianComponent  {

//   events$;
//     constructor(private eventData: FetchData){}
  
//     fetchGuardian() {
//       this.events$ = this.eventData.fetchGuardian();
//     }
// }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchData } from '../../fetch.component';
// import { FunctionComponent } from '../fetch/functions.component';
@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrls: ['./guardian.component.css']
})
export class GuardianComponent {

  events$: any
  constructor(private eventData: FetchData){

  
    this.events$ = this.eventData.fetchGuardian();
  }
}
