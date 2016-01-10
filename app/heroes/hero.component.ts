import {Component} from 'angular2/core'
import {RouteConfig, RouterOutlet} from 'angular2/router'

import {HeroListComponent} from './hero-list.component'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './hero.service'


@Component({
  directives: [RouterOutlet]
, providers:  [HeroService]
, template:  `
    <h2>title</h2>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path:'/', name: 'HeroList', component: HeroListComponent, useAsDefault: true}
, {path:'/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class HeroComponent {}
