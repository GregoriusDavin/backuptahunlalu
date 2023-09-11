function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum){
      const addarray = rangeOfNumbers(startNum, endNum - 1);
      addarray.push(endNum);
      return addarray;
    }else {
      return [];
    }
  };
  
  console.log(rangeOfNumbers(1, 2))
  //output akan menghasulkan [1, 2]