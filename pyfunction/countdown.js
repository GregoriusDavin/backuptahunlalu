function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1); // Recursively call countdown with n-1
      countArray.unshift(n); // Use unshift to add the number at the beginning
      return countArray;
    }
  }