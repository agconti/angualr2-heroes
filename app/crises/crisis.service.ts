import {Injectable} from 'angular2/core'
import {Crisis} from './ICrisis'
import {CRISES} from './fixtures/crises';

@Injectable()
export class CrisisService {

  getCrises() {
    return new Promise<Crisis[]>(resolve => {
      setTimeout(resolve(CRISES), 350)
    })
  }

}
