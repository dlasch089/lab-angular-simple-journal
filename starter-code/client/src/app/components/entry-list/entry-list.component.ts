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

  constructor(private theJournalEntriesService: JournalEntriesService) { }

  ngOnInit() {
    this.theJournalEntriesService.getJournalEntries().subscribe((journalEntryList) => this.journalEntryList = journalEntryList);
  }

}
