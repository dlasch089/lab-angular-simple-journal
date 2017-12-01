import { Component, OnInit } from '@angular/core';

import { JournalEntriesService } from '../../services/journal-entries.service';
import { JournalEntry } from '../../models/journalEntry';

// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journalEntryList: JournalEntry[];

  // gives you access to the methods of the service or the module (router) --> injected 
  constructor(private journalEntriesService: JournalEntriesService) { } // class: uppercase, instance: lowercase

  // simple rule: do not put anything in the constructor!
  ngOnInit() {
    this.journalEntriesService.getJournalEntries() // calls the function of the service
      .then((data) => this.journalEntryList = data); // subscribe: observable, but can be used, as the res is an observable
  }
}
