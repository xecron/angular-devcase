import { FilterPipe } from './filter.pipe';
import {MockVehicleDataset} from './utils.mocks';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter data with filter value', () => {
    let mockValues = [...MockVehicleDataset];
    mockValues = pipe.transform(mockValues, { colors: 'red'});

    expect(mockValues.length).toBe(3);
  });

  it('should filter data for multiple filter value', () => {
    let mockValues = [...MockVehicleDataset];
    mockValues = pipe.transform(mockValues, { colors: 'white'});
    mockValues = pipe.transform(mockValues, { type: 'car'});

    expect(mockValues.length).toBe(1);
  });
});
