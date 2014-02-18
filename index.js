import {Engine} from 'engine';
import {Diary} from 'diary';
import {ConsoleReporter} from 'reporters/console';

export class Batmobile {

  constructor(logger, engine) {
    this.logger = logger;
    this.engine = engine;
  }

  start() {
    this.logger.info('Starting batmobile!');
    this.engine.start();
  }

}

Diary.reporter(new ConsoleReporter({}), {
  level: ['info']
});

var batcar = new Batmobile( Diary.logger('batmobile'), new Engine(Diary.logger('engine')));
batcar.start();