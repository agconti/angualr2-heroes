import {Component, OnInit} from 'angular2/core'
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'

import {Hero} from './IHero'
import {HeroService} from './hero.service'


@Component({
  selector: 'hero-detail'
, inputs: ['hero']
, directives: [RouteParams]
, template:`
    <div *ngIf='hero'>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      </div>
      <a [routerLink]="['HeroList']">Back</a>
    </div>`
})
export class HeroDetail implements OnInit{
  public hero: Hero

  constructor( private _heroService: HeroService
             , private _router: Router
             , private _routeParams: RouteParams
             ) {}

  ngOnInit () {
    let heroId = Number(this._routeParams.get('id'))

    this._heroService.getHero(heroId).then(hero => this.hero = hero)
  }

}
