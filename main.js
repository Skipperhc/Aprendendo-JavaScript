// // requisição ajax e requisição assincrona
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/Skipperhc');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// // Promises
// // são códigos que não vão influenciar na linha do tempo do código

// var minhaPromise = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.4github.com/users/Skipperhc');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4) {
//                 if(xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 }else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }
// /*
// pra cima foi a minha primeira promise
// e pra baixo vai ser o inicio do uso do framework axios
// */


// //ajuda demais na hora de realizar requisições, é tipo um try catch, mas não sei o que, parece ser diferente
// //ao invez de tentar, ver se dá erro, ele só confere se o obj foi salvo mesmo
// // axios.get('https://api.github.com/users/Skipperhc')
// .then(function(response) {
//     console.log(response);
// })
// .catch(function(error) {
//     console.warn(error);
// });