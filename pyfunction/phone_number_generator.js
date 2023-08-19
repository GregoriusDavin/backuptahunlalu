function createPhoneNumber (num){
    const areaNumber = num.slice(0, 3).join('');
    const middleNumber = num.slice(3, 6).join('');
    const lastNumber = num.slice(6).join('');
    return `(${areaNumber} ${middleNumber}-${lastNumber})`
}

// example 
createPhoneNumber(["+", 6, 2, 8, 2, 1, 1, 1, 3, 0])