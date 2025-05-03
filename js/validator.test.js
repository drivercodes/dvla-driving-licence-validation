import { isValidDrivingLicence } from './validator.js';

describe('isValidDrivingLicence', () => {
  test('valid licence', () => {
    expect(isValidDrivingLicence('SMITH701231J99AB')).toBe(true);
  });

  test('invalid length', () => {
    expect(isValidDrivingLicence('SMITH701231J99A')).toBe(false);
  });
});
