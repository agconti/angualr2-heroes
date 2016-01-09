import {Component, OnInit} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'

import {CrisisService} from './crisis.service'
import {Crisis} from './ICrisis'

@Component({
  selector: 'crisis-detail'
, inputs: ['crisis']
, directives: [ROUTER_DIRECTIVES]
, template: `
    <div *ngIf='crisis'>
      <h2>Current Crisis!</h2>
      <div><label>id: </label>{{crisis.id}}</div>
      <div>
        <label>Description: </label>
        <div><input [(ngModel)]="crisis.description" placeholder="description"></div>
      </div>
      <a [routerLink]="['CrisisCenter']">Back</a>
    </div>`
})
export class CrisisDetailComponent implements OnInit{
  crisis: Crisis

  constructor( private _crisisService: CrisisService
             , private _router: Router
             , private _routeParams: RouteParams
             ) { }

  ngOnInit(){
    let crisisId = Number(this._routeParams.get('id'))

    this._crisisService.getCrisis(crisisId).then(crisis => this.crisis = crisis)
  }

}
