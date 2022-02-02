// Implementación de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let API = "https://rickandmortyapi.com/api/character/"

function fetchData(url_api, callback) {

    //referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest()


    /*
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open('GET', url_api, true)


    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function (event) {


        /*
        los estados que puede tener son:
            estado 0: inicializado
            estado 1: cargando
            estado 2: ya se cargó
            estado 3: ya hay información
            estado 4: solicitud completa
        PD: recuerda que estas trabajando con una API externa osea un servidor por lo que depende del servidor cuanto demore. En cada estado haces un pedido por datos (request) y solo es aplicar lógica.
        */


        if (xhttp.readyState === 4){

            //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
                ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
                ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
                ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
                ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
                ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
            if(xhttp.status === 200){

                //callback = funcion que se recibió de parametro (anidada cuando se llamo la funcion de fetchData), los parametros que uso aqui se "trasladan" a los parametros de la funcion anidada (callback)
                //null = error1, error2 o error3; es null porque ya se valido que no hay error y si paso un dato la validacion de la funcion callback va a ser verdadera y va a dar error
                //JSON.parse(xhttp.responseText) = es la respuesta en JSON que regresa la API, se guarda en data1, data2 o data3, dependiendo de la funcion

                callback(null, JSON.parse(xhttp.responseText))
            } else {

                //const error = un objeto error
                //parametro error = error1, error2, error3, dependiendo de la funcion
                // null = data1, ya que hubo un error en este parametro no hay nada por lo que paso null
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }

    //Envio de la solicitud.
    xhttp.send()
}

//llamo a la funcion fetchData y le paso de parametro url_api la variable API y la funcion que sirve de callback
fetchData(API, function (error1, data1) {

    //una vez llamo la funcion fetchData y llega a la linea callback en el if, tanto si es error o no, ejecuta este codigo, si es error muestra el error y mata el proceso, si esta bien guarda el JSON de xhttp.responseText en data1
    if (error1) return console.log(error1)

    // una vez se comprueba que no hay error, vuelve a llamar a la funcion fetchData
    // API = url base de la api + la informacion del JSON de data1 que necesito para pedir la informacion que requiero
    //function = funcion que funciona de callback
    fetchData(API + data1.results[0].id, function (error2, data2) {

        // una vez que la funcion fetchData llega a la linea del callback ejecuta este codigo, donde esta la validacion del error del segundo llamado a la api si todo esta bien, guarda en data2 el JSON de xhttp.responseText de la segunda solicitud a la API
        if (error2) return console.log(error2)

        // una vez se comprueba que no hay error, vuelve a llamar a la funcion fetchData le paso como parametro de API la url que creo con el JSON de data2 y la funcion que sirve de callback
        fetchData(data2.origin.url, function (error3, data3) {

            // realiza la validacion del error y si sale todo bien guarda el JSON de la peticion en data3
            if (error3) return console.log(error3)

            //imprimo en consola la informacion que necesito del JSON que guarda data1. data2 y data3  
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})