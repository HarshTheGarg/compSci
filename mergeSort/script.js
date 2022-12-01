function merSor(arr) {

    let res = []
    let arrA = arr.slice(0, arr.length / 2)
    let arrB = arr.slice(arr.length / 2)

    if ( arrA.length > 1 ) arrA = merSor(arrA)

    if ( arrB.length > 1 ) arrB = merSor(arrB)


    while ( arrA.length > 0 && arrB.length > 0 ) {
        if ( arrA[0] > arrB[0] ) {
            res.push( arrB.shift() )
        } else {
            res.push( arrA.shift() )
        }
    }

    return res.concat(arrA, arrB)
}

console.log(merSor([7, 5, 23, 6,32, 56, 6, 3]))