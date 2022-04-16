'use strict';

document.getElementById("myBtn").addEventListener("click", lala);

function lala() {
    let box = document.getElementById("check_box")
    if (box.hasAttribute('checked')) {
        box.removeAttribute('checked')
    } else box.setAttribute('checked', 'checked')
}

console.log("ARtir")