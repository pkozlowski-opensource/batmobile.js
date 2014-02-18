import {Diary} from 'diary';
import {Engine} from 'engine';

export class Batmobile {

  constructor(engine: Engine) {
    this.logger = Diary.logger('batmobile');
    this.engine = engine;
  }

  start() {
    this.logger.info('Starting batmobile!');
    this.engine.start();
  }
}