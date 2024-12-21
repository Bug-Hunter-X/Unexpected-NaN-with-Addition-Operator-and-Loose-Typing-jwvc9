function foo(a, b) {
  // Using optional chaining and nullish coalescing for robust handling
  const aValue = a ?? 0; 
  const bValue = b ?? 0;
  return aValue + bValue;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(0, 1)); // 1