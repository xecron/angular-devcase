import { DeduplicatePipe } from './deduplicate.pipe';
import { MockVehicleDataset } from './utils.mocks';

describe('DeduplicatePipe', () => {
  let pipe: DeduplicatePipe;

  beforeEach(() => {
    pipe = new DeduplicatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should remove duplicates by prop keys', () => {
    let mockValues = [...MockVehicleDataset];

    mockValues = pipe.transform(mockValues, {key: 'type'});

    expect(mockValues.length).toBe(3);
  });
});
