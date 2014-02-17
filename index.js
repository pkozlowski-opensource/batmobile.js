import {Engine} from 'engine';

export class Batmobile {

  constructor(engine) {
    this.engine = engine;
  }

  start() {
    console.log('Starting batmobile!');
    this.engine.start();
  }

}

var batcar = new Batmobile(new Engine());
batcar.start();