import {expectType} from 'tsd';

import asyncInit from '.'

function fn(): Promise<string> {
  return Promise.resolve('result')
}

expectType<<T>(fn: () => Promise<T>) => Promise<T>>(asyncInit())
expectType<Promise<string>>(asyncInit()(fn));
