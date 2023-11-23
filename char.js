
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

//to add a task to the list
function addTask() 
{
    const taskText = taskInput.value.trim();
    if (taskText !== "") 
    {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";

        
        li.addEventListener("click", function () 
        {
            li.classList.toggle("completed");
        });


        //create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        li.appendChild(deleteButton);


        //add the delete button to the list item
        deleteButton.addEventListener("click", function ()       //EVENT LISTENERS !!!
        {
            taskList.removeChild(li);
        });
    }
}

addTaskButton.addEventListener("click", addTask);                //EVENT LISTENERS !!!
    
// Add a keydown event listener to handle the "Enter" key press
taskInput.addEventListener("keypress", function (event) {        //EVENT LISTENERS !!!
    if (event.key === "Enter") {
        addTask();
    }
});

// for adv list
// const columns = document.querySelectorAll('.colunm');
const colunm1 = document.getElementById('col1');
const colunm2 = document.getElementById('col2');

const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);

    const currentColumn = event.target.closest('.colunm');

    if (draggedCardId === '51' && currentColumn.id === 'col1') {
        currentColumn.appendChild(draggedCard);
    } 
    else if (draggedCardId === '41' && currentColumn.id === 'col2') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '52' && currentColumn.id === 'col1') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '53' && currentColumn.id === 'col1') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '54' && currentColumn.id === 'col1') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '55' && currentColumn.id === 'col1') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '56' && currentColumn.id === 'col1') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '42' && currentColumn.id === 'col2') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '43' && currentColumn.id === 'col2') {
        currentColumn.appendChild(draggedCard);
    }
    else if (draggedCardId === '44' && currentColumn.id === 'col2') {
        currentColumn.appendChild(draggedCard);
    }
    
}

    colunm1.ondragover = onDragOver;
    colunm1.ondrop = onDrop;

    colunm2.ondragover = onDragOver;
    colunm2.ondrop = onDrop;

// for characters
const cards = document.querySelectorAll('.card');

const onDragStart = (event) => {
    event.dataTransfer.setData('id', event.target.id);
    setTimeOut (() => {
        event.target.style.visibility = 'hidden';
    }, 50)
}
const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
}
cards.forEach((card) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})

//for quiz
const questions = [
    {
        question: "What type of weapon does Seele use in the game?",
        answers: [
            { text: "scythe-type weapon", correct: true},
            { text: "sword", correct: false},
            { text: "gun", correct: false},
        ]
    },
    {
        question: "Who is the main antagonist in Honkai: Star Rail's storyline?",
        answers: [
            { text: "Lan The Hunt", correct: false},
            { text: "Nanook The Destruction", correct: true},
            { text: "Yaoshi The Abudance", correct: false},
        ]
    },
    {
        question: "What is the primary gameplay style in Honkai: Star Rail?",
        answers: [
            { text: "Action RPG", correct: true},
            { text: "Strategy Simulation", correct: false},
            { text: "Puzzle Adventure", correct: false},
        ]
    },
    {
        question: "Who leads the Stellaron Hunters and serves as their enigmatic figure?",
        answers: [
            { text: "Kafka", correct: false},
            { text: "Elio", correct: true},
            { text: "The Trailblazer", correct: false},
        ]
    },
    {
        question: "What unique ability do Vidyadhara, the dragon race, possess in the game's storyline?",
        answers: [
            { text: "Eternal youth without aging", correct: false},
            { text: "Rapid growth and development", correct: false},
            { text: "Capable of rebirth", correct: true},
        ]
    },
    {
        question: "How long is the life expectancy of fox people in Honkai: Star Rail?",
        answers: [
            { text: "100-200 years", correct: false},
            { text: "200-300 years", correct: false},
            { text: "300-400 years", correct: true},
        ]
    },
    {
        question: "Who is the creator of the Astral Express in Honkai: Star Rail?",
        answers: [
            { text: "Himeko", correct: false},
            { text: "Akivili the Trailblaze", correct: true},
            { text: "Fuli The Remembrance", correct: false},
        ]
    },
    {
        question: "What is the main goal of the Astral Express Crew in Honkai: Star Rail?",
        answers: [
            { text: "To repair the star rail by sealing the Stellarons", correct: true},
            { text: "To explore new galaxies and planets", correct: false},
            { text: "To uncover the mysteries of the Trailblazer", correct: false},
        ]
    },
    {
        question: "What factors contributed to the downfall of Jarilo-VI's civilization after the War of the Gods?",
        answers: [
            { text: "Technological stagnation and lack of innovation", correct: false},
            { text: "Alien invasions and planetary collisions", correct: false},
            { text: "The advent of Stellarons", correct: true},
        ]
    },
    {
        question: "Which character captures Kafka on the Xianzhou Luofu, leading to the Astral Express Crew's pursuit to Stargazer Navalia?",
        answers: [
            { text: "Fu Xuan", correct: true},
            { text: "Luocha", correct: false},
            { text: "Jing Yuan", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        selectedBtn.style.background = "#9aeabc";
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
        selectedBtn.style.background = "#ff9393";
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            button.style.background = "#9aeabc";
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Retry";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

//for audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 