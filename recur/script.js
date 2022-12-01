function fiboc(n) {

    if ( n <= 0 ) return

    if ( n == 1 ) return [0]
    
    if ( n == 2 ) return [0, 1]

    let las = fiboc(n-1)
    
    return las.concat(las[las.length - 2] + las[las.length - 1])

};

// console.log(fiboc(0))
// console.log(fiboc(1))
// console.log(fiboc(2))
// console.log(fiboc(3))
// console.log(fiboc(4))
// console.log(fiboc(5))
console.log(fiboc(8))
