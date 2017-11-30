import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JournalEntriesService } from '../../services/journal-entries.service';
import { JournalEntry } from '../../models/journalEntry';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journalEntry: JournalEntry;

  constructor(private theJournalEntriesService: JournalEntriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.theJournalEntriesService.getSingleEntry(params.id)
      .subscribe(journalEntry => this.journalEntry = journalEntry);
    });
  }

}
