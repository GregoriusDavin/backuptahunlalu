function longestConsec(strarr, k) {
    const strar = strarr.length
    if (strar ===  0  || k > strar || k <= 0) {
      return "";
    }
    let longestString = "";
    for (let i = 0; i <= strar - k; i++) {
      const string = strarr.slice(i, i+k).join('');
      if(string.length > longestString.length){
        longestString = string
      }
    }
    return longestString
  }

  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 4))