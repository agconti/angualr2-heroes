import {Component} from 'angular2/core'
import {Hero} from './IHero'


@Component({
  selector: 'hero-detail'
, template:`
    <div *ngIf='hero'>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      </div>
    </div>`
, inputs: ['hero']
})
export class HeroDetail {
  public hero: Hero
}
