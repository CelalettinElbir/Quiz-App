const questions = [



    {
        "id": 0,
        title: "question ",
        choices: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",

        ],
        score: 10,

        answer: "Answer 2"
    },

    {
        "id": 1,
        title: "question  2",
        choices: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",

        ],
        score: 10,

        answer: "Answer 2"

    },

    {
        "id": 2,
        title: "question  3 ",
        choices: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",

        ],
        score: 10,

        answer: "Answer 1"
    },
    {
        "id": 3,
        title: "question  4",
        choices: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",

        ],
        score: 10,

        answer: "Answer 3"
    },
    {
        "id": 4,
        title: "question  5",
        choices: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",

        ],
        score: 10,
        answer: "Answer 4"
    }




]


let titleContainer = document.getElementsByClassName("question-container")[0];
let choiceContainer = document.getElementsByClassName("choice-container")[0];
let buttonContainer = document.getElementsByClassName("button-container")[0];
let counter = 0;


function saveLocalStorge(items) {
    correctAnwers = []
    items.forEach(item => {
        correctAnwers.push(item.answer);

    });


    window.localStorage.setItem("correctAnswers", JSON.stringify({
        correctAnwers: correctAnwers
    }))


}
saveLocalStorge(questions);
ShowQuestions();

function ShowQuestions() {
    let currentObject = questions[counter];
    //title 
    let title = document.createElement("h3");
    title.innerText =  currentObject.title;
    titleContainer.appendChild(title);
    

    //choices 
    for (let i = 0; i < (currentObject.choices).length; i++) {
        console.log(currentObject.choices[i])
        let choice = document.createElement("li");
        choice.innerHTML = currentObject.choices[i];
        choiceContainer.appendChild(choice)

    }
    //buttons 

    let prevBtn  = document.createElement("button");
    let nextBtn  = document.createElement("button");
    prevBtn.innerText = "prev";
    nextBtn.innerText = "next";



    buttonContainer.appendChild(prevBtn)
    buttonContainer.appendChild(nextBtn)

}


function saveAndİncreaseCounter() {
    counter += 1

}


let deneme = window.localStorage.getItem("correctAnswers")
// console.log(JSON.parse(deneme).correctAnwers)