import {Component, OnInit} from 'angular2/core'
import {Crisis} from './ICrisis'
import {CrisisDetailComponent} from './crisis-detail.component'
import {CrisisService} from './crisis.service'


@Component({
  selector: 'crisis-list'
, providers: [CrisisService]
, directives: [CrisisDetailComponent]
, template: `
    <h2>Today's Top Crises</h2>
    <ul>
      <li *ngFor="#crisis of crises">
        <span class="badge">{{crisis.id}}</span> {{crisis.description}}
      </li>
    </ul>
    <crisis-detail></crisis-detail>
  `
})
export class CrisisListComponent implements OnInit {
  public crises: Crisis[]

  constructor(private _crisisService: CrisisService) {}

  ngOnInit() {
    this.getCrises()
  }

  getCrises() {
    this._crisisService.getCrises().then(crises => this.crises = crises)
  }
}
