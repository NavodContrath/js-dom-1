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

buttonEl.addEventListener('click',
    function () {
        imgOffEl.classList.add("none")
        imgOnEl.classList.remove("none")

    }
)