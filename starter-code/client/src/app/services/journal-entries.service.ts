import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; // similar to promises, but more power
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable() // can be injected into consctructors --> provider
export class JournalEntriesService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }


  // uses promises (better readable)!
  getJournalEntries() {
    return this.http.get(this.baseUrl + '/api/journal-entries')
      .toPromise()
      .then((res: Response) => res.json()); // returns only the json of the response
  }

  // uses observables
  getSingleEntry(id) {
    return this.http.get(this.baseUrl + `/api/journal-entries/${id}`)
    .map(res => res.json());
  }
}
