
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' 
})
export class FetchData {
  
  constructor(private http: HttpClient) {}

  fetchFox(): Observable<Object> {
    return this.http.get('http://localhost:3000/fox');
  }
  fetchAbc(): Observable<Object> {
    return this.http.get('http://localhost:3000/abc');
  }
  fetchNbc(): Observable<Object> {
    return this.http.get('http://localhost:3000/nbc');
  }
  fetchGuardian(): Observable<Object> {
    return this.http.get('http://localhost:3000/guardian');
  }
  fetchCnn(): Observable<Object> {
    return this.http.get('http://localhost:3000/cnn');
  }
  fetchNyt(): Observable<Object> {
    return this.http.get('http://localhost:3000/nyt');
  }
  fetchWashingtonPost(): Observable<Object> {
    return this.http.get('http://localhost:3000/washingtonPost');
  }

}