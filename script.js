// Snek 1
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

// Snek 2

// Creo un array di oggetti

const squadre =
    [
        {
            nome: 'Juventus',
            punti: 0,
            falli: 0
        },
        {
            nome: 'Inter',
            punti: 0,
            falli: 0
        },
        {
            nome: 'Milan',
            punti: 0,
            falli: 0
        },
        {
            nome: 'Roma',
            punti: 0,
            falli: 0
        },
        {
            nome: 'Napoli',
            punti: 0,
            falli: 0
        }
    ];

// Creo una funzione per generare numeri random

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Seleziono le proprietà punti e falli

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(1, 100);
    squadre[i].falli = randomNumber(1, 100);
}

console.log(squadre);