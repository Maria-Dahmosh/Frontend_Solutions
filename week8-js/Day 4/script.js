function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`count increased to ${count}`);
  }
  return increment;
}
counter = createCounter();
counter();
counter();
