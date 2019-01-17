// alert("You get to choose five words")
// let first = prompt("1. Give me a word")
// let second = prompt("2. Give me another")
// let third = prompt("3. Give me another")
// let fourth = prompt("4. Give me another")
// let fifth = prompt("5. Give me another")

let counter = 0
let answerArray = [];

function questionaire() {

for (let i = 0; i < 20; i++) {
    let answers = answerArray[i]
    answers = prompt("Give me a word")
    // answers = answers + " ";
    answerArray.push(answers) 
    counter+= 1
    console.log(answerArray)  
    if (answers === ".") {
        answerArray.push(answers) 
        break
    } 
    // if (counter === 8) {
    //     break
    // }
}
}

questionaire();
let messageArray = [];
for (let i = 0; i < counter; i++) {
    const messages = document.querySelector("#messages")
const individualMessage = document.createElement('section')
individualMessage.innerHTML = answerArray[i]
individualMessage.className = "message"
messageArray.push(individualMessage)
    
}

// const messages = document.querySelector("#messages")
// const individualMessage1 = document.createElement('section')
// individualMessage1.innerHTML = answerArray[0]
// individualMessage1.className = "message"
// const individualMessage2 = document.createElement('section')
// individualMessage2.innerHTML = answerArray[1]
// individualMessage2.className = "message"
// const individualMessage3 = document.createElement('section')
// individualMessage3.innerHTML = answerArray[2]
// individualMessage3.className = "message"
// const individualMessage4 = document.createElement('section')
// individualMessage4.innerHTML = answerArray[3]
// individualMessage4.className = "message"
// const individualMessage5 = document.createElement('section')
// individualMessage5.innerHTML = answerArray[4]
// individualMessage5.className = "message"


function messagePrint(mesaggess) {  
    messages.appendChild(mesaggess)
}

// let messageArray = [individualMessage1, individualMessage2, individualMessage3, individualMessage4, individualMessage5]


let timerArray = []
let j = 0

for (let i = 0; i < counter; i++) {
    timerArray.push(j)
    let k = Math.random() * 100
    j+= 500 + k
    console.log(timerArray)
    
}



for (var i = 0; i < messageArray.length; i++ ) {

    let interval = timerArray[i]
    const currentMessage = messageArray[i]
    
    setTimeout(() => {messagePrint(currentMessage)}, interval)
    
}