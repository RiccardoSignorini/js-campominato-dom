/*
---PROBLEMA---
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// COSTANTI E VARIABILI
const button = document.querySelector('button')

const field = document.getElementById('campo')

const root = document.querySelector(':root')

let difficult = document.getElementById('selectDifficult')

let num = randomNum(1, 100)

// FUNZIONE NUMERO RANDOM
function randomNum(min, max){
    return Math.floor(Math.random()*max) + min;
}

// FUNZIONE ADATTAMENTO CELLA DIFFICOLTA'
function adaptiveCell(x){
    x = Math.sqrt(x)
    root.style.setProperty('--granCelle', x) 
}

// EVENTO AL CLICK (BOTTONE)
button.addEventListener('click', function() {
    createField()
})

// FUNZIONE AL CLICK (BOTTONE)
function createField(){
    let selectDifficult = parseInt(difficult.value)

    console.log(selectDifficult)

    adaptiveCell(selectDifficult)

    for(let i = 1; i<=selectDifficult; i++){
        let cubo = document.createElement('div')

        cubo.classList.add('cubo')

        cubo.innerText = i

        document.querySelector('#griglia').append(cubo)

        // EVENTO AL CLICK (CUBO)
        cubo.addEventListener('click', function() {
            colorCubo()

            console.log(this.innerText)
        })

        // FUNZIONE AL CLICK (CUBO)
        function colorCubo(){
            cubo.classList.add('clicked')
        }
    }
}