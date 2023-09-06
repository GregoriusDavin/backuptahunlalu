function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }
  console.log(randomWholeNum)

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
  
  console.log(randomRange(1, 6));

  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1); 
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(2))