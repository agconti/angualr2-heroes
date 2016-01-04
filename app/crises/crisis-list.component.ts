import {Component} from 'angular2/core'
import {CrisisDetailComponent} from './crisis-detail.component'

@Component({
  selector: 'crisis-list'
, template: `
    <p>So <b>much</b> crisis!</p>
    <crisis-detail></crisis-detail>
  `
, directives: [CrisisDetailComponent]
})
export class CrisisListComponent {}
