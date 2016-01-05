import {Component} from 'angular2/core'

@Component({
  selector: 'crisis-detail'
, template: `
    <div *ngIf='crisis'>
      <h2>Current Crisis!</h2>
      <div><label>id: </label>{{crisis.id}}</div>
      <div>
        <label>Description: </label>
        <div><input [(ngModel)]="crisis.description" placeholder="description"></div>
      </div>
    </div>`
, inputs: ['crisis']
})
export class CrisisDetailComponent {}
