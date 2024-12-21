# JavaScript Loose Typing Bug: Unexpected NaN with Addition

This repository demonstrates a common pitfall in JavaScript related to loose typing and the addition operator (+).

## The Bug

The issue arises when using the + operator with undefined or null values.  While null is coerced to 0, undefined results in NaN, which can propagate through calculations, leading to unexpected outcomes.

## Reproduction

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected results for the `undefined` and `null` cases.

## Solution

The solution involves explicit type checking or using a more robust approach to handle potential null or undefined inputs.  The provided `bugSolution.js` file demonstrates a solution using optional chaining and nullish coalescing.

## Additional Notes

This example highlights the importance of careful input validation and consideration of JavaScript's loose typing system.  Always handle potential null or undefined values gracefully to prevent unexpected NaN errors.