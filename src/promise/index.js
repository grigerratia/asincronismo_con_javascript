const something_will_happen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Resuelto!')
        } else {
            reject('Ups! No resuelto')
        }
    })
}

something_will_happen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

//En mis propias palabras (Cosa que no pude hacer con los callbacks porque no entendi)
/*
El espacio de nombre:Algo_va_a_pasar    Contiene   Una funcion   Que hace lo sigueinte {
    Retorna como resultado    Una nueva promesa( (esta puede resolverse, o rechazarse) Para ejecutar la siguiente funcion {
        Si (se cumple esta condicion) entonces {
            Resuelve la promesa haciendo esto (escribir 'Resuelto')
        } Sino {
            Rechaza la promesa haciendo esto (escribir 'No resuelto')
        }
    })
}

La funcion de nombre:Algo_va_a_pasar   Se ejecuta
    Esta puede resolverse para ejecutar la siguiente funcion de nombre:Respuesta  Que hace lo siguiente =>  Muestra en la consola   Como esta puede resolverse
    O rechazarse para ejecutar la siguiente funcion de nombre: Error   Que hace lo siguiente =>   Muestra en la consola   Como esta puede rechazarse
*/





const something_will_happen_2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Tambien resuelto')
            }, 3000)
        } else {
            const error = new Error('No funciona')
            reject(error)
        }
    })
}


something_will_happen_2()
    .then(resolve => console.log(resolve))
    .then(() => console.log('Segunda respuesta de la promesa'))
    .catch(reject => console.error(reject))


//En mis propias palabras (Cosa que no pude hacer con los callbacks porque no entendi)
/*
El espacio de nombre:Algo_va_a_pasar_2    Contiene   Una funcion   Que hace lo sigueinte {
    Retorna como resultado    Una nueva promesa( (esta puede resolverse, o rechazarse) Para ejecutar la siguiente funcion {
        Si (se cumple esta condicion) entonces {
            Establece un tiempo de espera   Antes de hacer lo siguiente => {
                Resuelve la promesa haciendo esto: (escribe 'Tambien Resuelto')
            }, el tiempo sera de 3000 milisegundos.
        } Sino {
            El espacio de nombre:   Error   Contiene   Un nuevo mensaje de error   con lo siguiente ('NO FUNCIONA')
            Rechaza la promesa haciendo esto (escribir Error)
        }
        }
    })
}

La funcion de nombre:Algo_va_a_pasar_2   Se ejecuta
    Esta puede resolverse para ejecutar la siguiente funcion de nombre:Respuesta  Que hace lo siguiente =>  Muestra en la consola   Como esta puede resolverse
    Esta puede resolverse para ejecutar la siguiente funcion   Que hace lo siguiente =>   Muestra en la consola   'Segunda respuesta de la promesa'
    O rechazarse para ejecutar la siguiente funcion de nombre: Error   Que hace lo siguiente =>   Muestra en la consola   Como esta puede rechazarse
*/



Promise.all([something_will_happen(), something_will_happen_2()])
    .then(resolve => console.log('Arreglo con los resultados: ', resolve))
    .catch(reject => console.log(reject))





const mi_nombre = 'Idalys'

mi_nombre == 'griger' ? console.log('Mi nombre si es griger') : console.log('Mi nombre es: ' + mi_nombre)