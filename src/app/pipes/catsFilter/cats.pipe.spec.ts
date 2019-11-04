import { CatsPipe } from './cats.pipe';

describe('CatsOriginPipe', () => {
  it('create an instance', () => {
    const pipe = new CatsPipe();
    expect(pipe).toBeTruthy();
  });
});
