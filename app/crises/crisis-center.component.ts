import {Component} from 'angular2/core'
import {RouteConfig, RouterOutlet} from 'angular2/router'

import {CrisisListComponent} from './crisis-list.component'
import {CrisisDetailComponent} from './crisis-detail.component'
import {CrisisService} from './crisis.service'


@Component({
  directives: [RouterOutlet]
, providers:  [CrisisService]
, template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path:'/', name: 'CrisisList', component: CrisisListComponent, useAsDefault: true}
, {path:'/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisCenterComponent { }
