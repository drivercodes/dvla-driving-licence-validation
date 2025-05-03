/**
 * Validates a UK DVLA driving licence number.
 *
 * @param licenceNumber - The driving licence number to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidDrivingLicence(licenceNumber: string): boolean {
  const regex =
    /^(?=.{16}$)[A-Za-z]{1,5}9{0,4}[0-9](?:[05][1-9]|[16][0-2])(?:[0][1-9]|[12][0-9]|3[01])[0-9](?:99|[A-Za-z][A-Za-z9])(?![IOQYZioqyz01_])\w[A-Za-z]{2}$/;
  return regex.test(licenceNumber);
}
