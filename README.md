# DVLA Driving Licence Validator

Validate whether a UK driving licence input string meets the DVLA's official issuance format.

A simple JavaScript and TypeScript utility for validating UK DVLA driving licence numbers using a strict regular expression.

---

## 📦 Features

- Validates standard 16-character UK DVLA licence numbers
- Available in both JavaScript and TypeScript
- Includes Jest unit tests

---

## 🚀 Installation

Clone this repo:

```bash
git clone https://github.com/drivercodes/dvla-driving-licence-validation.git
cd dvla-driving-licence-validation
npm install
```

---

## 🛠 Usage

### JavaScript

```js
import { isValidDrivingLicence } from './js/validator.js';

console.log(isValidDrivingLicence("SMITH701231J99AB")); // true or false
```

### TypeScript

```ts
import { isValidDrivingLicence } from './ts/validator';

console.log(isValidDrivingLicence("SMITH701231J99AB")); // true or false
```

---

## 🔍 What is a UK driving licence number?

Your driving licence number is a 16-character code that’s unique to you — it's a mixture of letters and numbers. You can find it on your photocard driving licence underneath the licence’s expiry date. It should have the number 5 before it.

---

## 🧩 What do these letters and numbers mean?

Your UK driving licence number is made up of 5 parts:

1. **Surname** (first 5 characters):  
   - If your surname is fewer than 5 letters, it’s padded with the number 9.  
   - If your surname is longer, only the first 5 letters are used.  
   - Examples:  
     - `GIBBS` → `GIBBS`  
     - `LEE` → `LEE99`  
     - `JOHNSON` → `JOHNS`

2. **Date of birth** (next 6 digits):  
   - Encodes your **year**, **month**, and **day** of birth.  
   - Format: `YMMDDY`, where the first and last numbers are the birth year.  
   - For female drivers, **5 is added to the first digit of the birth month** as the only gender indicator.
   - Examples:  
     - Male born 23 March 1986 → `803236`  
     - Female born 23 March 1986 → `853236`

3. **Initials** (next 2 letters/numbers):  
   - First name and middle name initials.  
   - If no middle name, the second character is `9`.  
   - Examples:  
     - Jamie Nicholas → `JN`  
     - Adele (no middle name) → `A9`

4. **Security code** (last 3 characters):  
   - Randomised characters for fraud prevention.  
   - These ensure that even people with identical names and birth dates get unique numbers.

> 🔒 **Note:** You may see a **2-digit licence issue number** to the right of the 16-character code — this is not part of your driving licence number and increases each time your licence is reissued.

---

## 🧪 Running Tests

```bash
npm test
```

Tests exist for both JavaScript and TypeScript under the `js/` and `ts/` folders.

---


## 📄 License

MIT — free for anyone to use, modify, and distribute.
