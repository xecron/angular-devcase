import { SpreadPipe } from './spread.pipe';
import {MockVehicleDataset} from './utils.mocks';

describe('SpreadPipe', () => {
  let pipe: SpreadPipe;

  beforeEach(() => {
    pipe = new SpreadPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should spread array values return without duplicates', () => {
    let mockValues = [...MockVehicleDataset];
    mockValues = pipe.transform(mockValues, { key: 'colors'});

    expect(mockValues.length).toBe(7);
  });
});
