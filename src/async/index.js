const do_something_async = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('hacer algo asincrono'), 3000)
            : reject(new Error('Oye que mal, hay un error'))
    })
}

const do_something = async () => {
    const something = await do_something_async()
    console.log(something)
}

console.log('before')
do_something()
console.log('After')





const another_fuction = async () => {
    try {
        const something = await do_something_async()
        console.log(something + ' con try catch')
    } catch (error) {
        console.error(error)
    }
}

console.log('before 1')
another_fuction()
console.log('After 1')





// Segundo ejemplo ------>>>>>
const suma = async (a, b) => {
    let c = await a + b
    console.log(c)
}

function resta (a, b) {
    var c = a - b
    console.log(c)
}

suma (5,5)
resta(10, 5)