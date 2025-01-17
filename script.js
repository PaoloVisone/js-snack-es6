// Creo un array di oggetti

const bici =
    [
        {
            nome: 'Cervelo',
            peso: 3
        },
        {
            nome: 'Pinarello',
            peso: 7
        },
        {
            nome: 'Colnago',
            peso: 11
        },
        {
            nome: 'BMC',
            peso: 9
        },
        {
            nome: 'Specialized',
            peso: 15
        },
        {
            nome: 'Bianchi',
            peso: 1
        }
    ];

// Seleziono l'elemento html

const message = document.getElementById('message')

// Creo una variabile per il peso e una per il nome

let pesoBici = bici[5].peso;

let nomeBici = bici[5].nome;

console.log(pesoBici);

// Stampo a schermo
message.innerHTML = `La bici ${nomeBici} è la più leggera. Il suo peso è di ${pesoBici} kg!`



