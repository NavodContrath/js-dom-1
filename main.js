/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */

/*SUMMARY
- const buttonEl
- const imgOffEl
- const imgOnEl
- addEventlistener
- function inside the event listener
*/
const buttonEl = document.querySelector("button")
const imgOffEl = document.getElementById("imgOff")
const imgOnEl = document.getElementById("imgOn")
console.log(buttonEl, imgOffEl, imgOnEl);
let isOff = 0

buttonEl.addEventListener('click',
    function () {
        if (isOff === 0) {
            imgOffEl.classList.add("none")
            imgOnEl.classList.remove("none")
            buttonEl.innerText = "OFF"
            isOff = 1
            return isOff
        } else {
            imgOffEl.classList.remove("none")
            imgOnEl.classList.add("none")
            buttonEl.innerText = "ON"
            isOff = 0
            return isOff
        }
    }
)




