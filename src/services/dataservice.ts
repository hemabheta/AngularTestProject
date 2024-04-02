import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private randomNumber: number=0;
  constructor() { }

  public generateAndReturnRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    return this.randomNumber;
  }
}
// Math.random(): This function returns a floating-point, pseudo-random number in the range [0, 1) (including 0 but excluding 1).
//   Math.random() * 100: Multiplying the random number by 100 gives us a random floating-point number in the range [0, 100).
//   Math.floor(Math.random() * 100): The Math.floor() function rounds down the floating-point number to the nearest integer less than or equal to it. 
//   This ensures that we get a whole number in the range [0, 99].
//   Math.floor(Math.random() * 100) + 1: Finally, adding 1 to the result shifts the range to [1, 100], 
//   ensuring that the generated random number is between 1 and 100 (inclusive).