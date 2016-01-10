import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {CrisisCenterComponent} from './crises/crisis-center.component'
import {HeroListComponent} from './heroes/hero-list.component'


@Component({
  selector: 'my-app'
, template: `
    <h1>Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `
, directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent}
, {path:'/heroes', name: 'Heroes', component: HeroListComponent}
])
export class AppComponent { }
