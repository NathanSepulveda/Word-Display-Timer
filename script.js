alert("You get to choose five words")
let first = prompt("1. Give me a word")
let second = prompt("2. Give me another")
let third = prompt("3. Give me another")
let fourth = prompt("4. Give me another")
let fifth = prompt("5. Give me another")


const messages = document.querySelector("#messages")
const individualMessage1 = document.createElement('section')
individualMessage1.innerHTML = first
individualMessage1.className = "message"
const individualMessage2 = document.createElement('section')
individualMessage2.innerHTML = second
individualMessage2.className = "message"
const individualMessage3 = document.createElement('section')
individualMessage3.innerHTML = third
individualMessage3.className = "message"
const individualMessage4 = document.createElement('section')
individualMessage4.innerHTML = fourth
individualMessage4.className = "message"
const individualMessage5 = document.createElement('section')
individualMessage5.innerHTML = fifth
individualMessage5.className = "message"

// function messagePrint() {  
//     messages.appendChild(individualMessage1)
// }

function messagePrint(mesaggess) {  
    messages.appendChild(mesaggess)
}

let messageArray = [individualMessage1, individualMessage2, individualMessage3, individualMessage4, individualMessage5]

// setTimeout(messagePrint, 1000);
// setTimeout(() => {messagePrint(messageArray[0])}, 1000);
let timerArray = [1000, 2000, 3000, 4000, 5000, 6000]
// setTimeout(() => {messagePrint(messageArray[0])}, timerArray[2]);

for (var i = 0; i < messageArray.length; i++ ) {
    // let j = 0;
    let interval = timerArray[i]
    const currentMessage = messageArray[i]
    
    setTimeout(() => {messagePrint(currentMessage)}, interval)
    
}