
let counter = 0
let answerArray = [];

function questionaire() {

    for (let i = 0; i < 20; i++) {
        let answers = answerArray[i]
        answers = prompt("Give me a word")
        // answers = answers + " ";
        answerArray.push(answers)
        counter += 1
        console.log(answerArray)
        if (answers === ".") {
            answerArray.push(answers)
            break
        }
    }
}

questionaire();

console.log(answerArray)
// var messagee = document.querySelector("#messages")
// messagee.innerHTML = answerArray[2]
// messagee.innerHTML += answerArray[1]
// const individualMessage = document.createElement('section')

// let messageArray = [];
// for (let i = 0; i < counter; i++) {
//     const messages = document.querySelector("#messages")
//     // const individualMessage = document.createElement('section')
//     individualMessage.innerHTML += answerArray[i]
//     individualMessage.className = "message"
//     messageArray.push(individualMessage)

// }

// console.log(messageArray)

// const messages = document.querySelector("#messages")
// const individualMessage1 = document.createElement('section')
// individualMessage1.innerHTML = answerArray[0]
// individualMessage1.className = "message"



// function messagePrint(mesaggess) {
//     document
//     messages.appendChild(mesaggess)
// }

// var messagee = document.querySelector("#messages")
// messagee.innerHTML = answerArray[2]
// messagee.innerHTML += answerArray[1]


let timerArray = []
let j = 0

for (let i = 0; i < counter; i++) {
    timerArray.push(j)
    let k = Math.random() * 100
    j += 500 + k
    console.log(timerArray)
}

// for (var i = 0; i < messageArray.length; i++) {

//     let interval = timerArray[i]
//     const currentMessage = messageArray[i]

//     setTimeout(() => { messagePrint(currentMessage) }, interval)

// }
// function messagePrint(messagee, iterable) {
//     var messagee = document.querySelector("#messages")
//     let actualMessage = messagee.innerHTML
//     // messagee.innerHTML = answerArray[iterable]
//     actualMessage += answerArray[iterable]
//     }

for (var i = 0; i < answerArray.length; i++) {
function printer() {
   let paragraph = document.querySelector("messages")
   paragraph.innerHTML = answerArray[2]
}
printer()
}



// for (var i = 0; i < answerArray.length; i++) {

//     let interval = timerArray[i]
//     const currentMessage = answerArray[i]
//     var messagee = document.querySelector("#messages")

//     setTimeout(() => { messagePrint(currentMessage, i) }, interval)

// }


// function messagePrint(messagee, iterable) {
// var messagee = document.querySelector("#messages")
// let actualMessage = messagee.innerHTML
// // messagee.innerHTML = answerArray[iterable]
// actualMessage += answerArray[iterable]
// }