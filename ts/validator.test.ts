import { isValidDrivingLicence } from './validator';

describe('isValidDrivingLicence', () => {
  it('valid licence', () => {
    expect(isValidDrivingLicence('SMITH701231J99AB')).toBe(true);
  });

  it('invalid length', () => {
    expect(isValidDrivingLicence('SMITH701231J99A')).toBe(false);
  });
});
