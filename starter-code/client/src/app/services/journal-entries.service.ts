import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalEntriesService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getJournalEntries() {
    return this.http.get(this.baseUrl + '/api/journal-entries')
    .map((res: Response) => res.json());
  }

  getSingleEntry(id) {
    return this.http.get(this.baseUrl + `/api/journal-entries/${id}`)
    .map(res => res.json());
  }
}
