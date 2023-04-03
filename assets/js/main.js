/*
---PROBLEMA---
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// COSTANTI
const button = document.querySelector('button')
const field = document.getElementById('campo')

// EVENTO AL CLICK (BOTTONE)
button.addEventListener('click', function() {
    createField()
})

// FUNZIONE AL CLICK (BOTTONE)
function createField(){
    for(let i = 1; i<=100; i++){
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