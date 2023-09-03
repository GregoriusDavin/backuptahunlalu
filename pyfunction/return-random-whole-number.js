function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }
  console.log(randomWholeNum)

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
  
  console.log(randomRange(1, 6));