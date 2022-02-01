function sum(n1, n2) {
    return n1 + n2
}

function calc(n1, n2, callback) {
    return callback(n1, n2)
}

console.log(calc(5, 5, sum))





function date(callback) {

    setTimeout(function () {
        let date = new Date
        callback(date)
    }, 0)

    console.log(new Date + " sin tiempo")
}

function printDate(dateNow) {
    console.log(dateNow + " con tiempo")
}

date(printDate)