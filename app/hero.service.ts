import {Injectable} from 'angular2/core'
import {Hero} from './IHero'
import {HEROES} from './fixtures/heros'


@Injectable()
export class HeroService {
  getHeroes() {
    return new Promise<Hero[]>(resolve => {
      setTimeout(() => resolve(HEROES), 350)
    })
  }
}
