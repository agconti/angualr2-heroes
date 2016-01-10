import {Injectable} from 'angular2/core'
import {Hero} from './IHero'
import {HEROES} from './fixtures/heros'


@Injectable()
export class HeroService {

  getHero(id: Number) {
    return this.getHeroes().then(heroes => heroes.find(hero => id == hero.id))
  }
  getHeroes() {
    return new Promise<Hero[]>(resolve => {
      setTimeout(() => resolve(HEROES), 350)
    })
  }
}
