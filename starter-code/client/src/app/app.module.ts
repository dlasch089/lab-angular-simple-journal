// starting-point in an app created from someone else (except the models)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// created services
import { JournalEntriesService } from './services/journal-entries.service';
// created components
import { EntryListComponent } from './components/entry-list/entry-list.component'; // should be page-components!
import { SingleEntryComponent } from './components/single-entry/single-entry.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EntryListComponent },
  { path: 'home/:id', component: SingleEntryComponent }
];

@NgModule({
  declarations: [ // nice overview of the components
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [ // nice overview of the used modules 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) // defined above 
  ],
  providers: [
    JournalEntriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
