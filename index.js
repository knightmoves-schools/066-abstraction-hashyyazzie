

class TaxCalculator {
  // Define private fields and methods using the # prefix
  #rate = 15;

  constructor() {
    this.state = 'TX';
    this.exempt = false;
  }

  // Private method: can only be called from within this class
  #calculateExempt(value) {
    return value * (this.#rate / 100); 
  }

  // Private method: hidden from the outside world
  #calculateNonExempt(value) {
    return value * 1.5; // Example logic
  }

  // Public method: the "interface" for the user
  calculate() {
    if (this.exempt) {
      // Call private methods using the # prefix
      return this.#calculateExempt(1.37);
    } else {
      return this.#calculateNonExempt(5.72);
    }
  }
}

// Example usage:
const calculator = new TaxCalculator();
console.log(calculator.calculate()); // This works

// These will throw Syntax Errors or return undefined:
// console.log(calculator.#rate); 
// console.log(calculator.#calculateExempt(1.37));
