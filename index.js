import {Diary} from 'diary';
import {ConsoleReporter} from 'reporters/console';
import {Injector} from 'injector';

import {Engine} from 'engine';
import {Batmobile} from 'batmobile';

Diary.reporter(new ConsoleReporter({
  console: window.console
}), {
  level: ['info']
});

var injector = new Injector([Engine]);
injector.get(Batmobile).start();
