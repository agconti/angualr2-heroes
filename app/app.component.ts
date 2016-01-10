import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {CrisisCenterComponent} from './crises/crisis-center.component'
import {HeroComponent} from './heroes/hero.component.ts'


@Component({
  selector: 'my-app'
, directives: [ROUTER_DIRECTIVES]
, template: `
    <h1>Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true}
, {path:'/heroes/...', name: 'Heroes', component: HeroComponent}
])
export class AppComponent { }
