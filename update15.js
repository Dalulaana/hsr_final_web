//animation for text
const text = document.querySelector(".change");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    span.style.opacity = "1";
    char++;
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

//pop-up chat window
function openForm() {
    document.getElementById("myForm").style.display="block";
}

function closeForm() {
    document.getElementById("myForm").style.display="none";
}