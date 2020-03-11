function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if(idade >= 18) {
            setTimeout(() => {
                resolve('é maior de IDADEEEEEEEE') 
            }, 2000);
        }else if(idade <= 18 && idade > 0) {
            setTimeout(() => {
                reject('É MAIS NOVOOOOOOOOO')
            }, 2000);
        }
    });
}

// setInterval(() => {
//     console.log('é');
// }, 10);

checaIdade(10)
    .then((response) => {
    console.log('resultado: '+response);
    })
    .catch((err) => {
    console.log('Resposta' + err)
    });