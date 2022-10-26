const nome = prompt('Inserisci il tuo nome: ');
const cognome = prompt('Inserisci il tuo cognome: ');
const colore = prompt('Inserisci il tuo colore preferito: ');

const generatedPassword = `${nome}${cognome}${colore}21`;

const h1Name = document.getElementById('h1Name');
const printName = document.getElementById('printName');
const printSurname = document.getElementById('printSurname');
const printColor = document.getElementById('printColor');
const printPassword = document.getElementById('printPassword');

h1Name.innerHTML = `${nome}`;
printName.innerHTML = `${nome}`;
printSurname.innerHTML = `${cognome}`;
printColor.innerHTML = `${colore}`;
printPassword.innerHTML = `<strong><em>${generatedPassword}</em></strong>`;
