import {Component, OnInit} from 'angular2/core'
import {Router} from 'angular2/router'
import {Crisis} from './ICrisis'
import {CrisisDetailComponent} from './crisis-detail.component'
import {CrisisService} from './crisis.service'


@Component({
  selector: 'crisis-list'
, providers: [CrisisService]
, directives: [CrisisDetailComponent]
, template: `
    <h2>Today's Top Crises</h2>
    <ul class="crises">
      <li *ngFor="#crisis of crises"
          [class.selected]="crisis === selectedCrisis"
          (click)=selectCrisis(crisis)>
        <span class="badge">{{crisis.id}}</span> {{crisis.description}}
      </li>
    </ul>
    <crisis-detail [crisis]="selectedCrisis"></crisis-detail>
  `
, styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .crises {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 20em;
    }
    .crises li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .crises li.selected:hover {
      color: white;
    }
    .crises li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .crises .text {
      position: relative;
      top: -3px;
    }
    .crises .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `]
})
export class CrisisListComponent implements OnInit {
  public crises: Crisis[]
  public selectedCrisis: Crisis

  constructor( private _crisisService: CrisisService
             , private _router: Router ) {}

  ngOnInit() {
    this.getCrises()
  }

  getCrises() {
    this._crisisService.getCrises().then(crises => this.crises = crises)
  }

  selectCrisis(crisis: Crisis){
    this.selectedCrisis = crisis
    this._router.navigate(['CrisisDetail', { id: crisis.id }])
  }
}
