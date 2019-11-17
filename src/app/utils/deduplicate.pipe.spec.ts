import { DeduplicatePipe } from './deduplicate.pipe';

describe('DeduplicatePipe', () => {
  it('create an instance', () => {
    const pipe = new DeduplicatePipe();
    expect(pipe).toBeTruthy();
  });
});
