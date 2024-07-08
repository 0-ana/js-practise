// Get elements from DOM
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progress = document.getElementById("count-number");
const scoreText = document.getElementById("score");

// Variables
let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter= 0;
let availableQuestions = [];

// All available questions
let questions = [
    {
        question: 'How long is an Olympic swimming pool (in meters)?',
        option1: '40',
        option2: '45',
        option3: '50',
        option4: '55',
        answer: 3
    },
    {
        question: 'What is "cynophobia"?',
        option1: 'Fear of dogs',
        option2: 'Fear of cats',
        option3: 'Fear of heights',
        option4: 'Fear of crowds',
        answer: 1
    },
    {
        question: 'What is the name of the World largest ocean?',
        option1: 'Atlantic Ocean',
        option2: 'Indian Ocean',
        option3: 'Pacific Ocean',
        option4: 'Arctic Ocean',
        answer: 3
    },
    {
        question: 'How many colors are there in the rainbow?',
        option1: 'Five',
        option2: 'Six',
        option3: 'Seven',
        option4: 'Eight',
        answer: 3
    },
    {
        question: 'Which country is the smallest in the world?',
        option1: 'Tuvalu',
        option2: 'Nauru',
        option3: 'Monaco',
        option4: 'Vatican City',
        answer: 4
    },
    {
        question: 'Area 51 is located in which U S state?',
        option1: 'Oregon',
        option2: 'Idaho',
        option3: 'Utah',
        option4: 'Nevada',
        answer: 4
    },
    {
        question: 'What country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?',
        option1: 'Bangladesh',
        option2: 'India',
        option3: 'Sri Lanka',
        option4: 'Maldives',
        answer: 2
    },
    {
        question: 'What country has the most natural lakes?',
        option1: 'Canada',
        option2: 'Finland',
        option3: 'Switzerland',
        option4: 'Russia',
        answer: 1
    },
    {
        question: 'How many hearts does an octopus have?',
        option1: 'Two',
        option2: 'Three',
        option3: 'Four',
        option4: 'Five',
        answer: 2
    },
    {
        question: 'How many legs does a spider have?',
        option1: 'Four',
        option2: 'Six',
        option3: 'Eight',
        option4: 'Ten',
        answer: 3
    },
    {
        question: 'What is the largest planet in the solar system?',
        option1: 'Saturn',
        option2: 'Venus',
        option3: 'Jupiter',
        option4: 'Neptune',
        answer: 3
    },
    {
        question: 'What is the fastest land animal?',
        option1: 'Quarter Horse',
        option2: 'Pronghorn',
        option3: 'Springbok',
        option4: 'Cheetah',
        answer: 4
    },
    {
        question: 'Who painted the Mona Lisa?',
        option1: 'Vincent van Gogh',
        option2: 'Claude Monet',
        option3: 'Leonardo da Vinci',
        option4: 'Pablo Picasso',
        answer: 3
    },
    {
        question: 'What nut is in the middle of a Ferrero Rocher?',
        option1: 'Hazelnut',
        option2: 'Almond',
        option3: 'Walnut',
        option4: 'Peanut',
        answer: 1
    },
    {
        question: 'How many rings does olympics logo have?',
        option1: 'Four',
        option2: 'Five',
        option3: 'Six',
        option4: 'Seven',
        answer: 2
    },
    {
        question: 'How many elements are there in the periodic table?',
        option1: '104',
        option2: '108',
        option3: '114',
        option4: '118',
        answer: 4
    },
    {
        question: 'Zagreb is the capital city of which country?',
        option1: 'Croatia',
        option2: 'Bosnia and Herzegovina',
        option3: 'Serbia',
        option4: 'Slovenia',
        answer: 1
    },
    {
        question: 'What year did the Berlin Wall fall?',
        option1: '1986',
        option2: '1987',
        option3: '1988',
        option4: '1989',
        answer: 4
    },
    {
        question: 'What is the largest organ in the human body?',
        option1: 'Skin',
        option2: 'Lungs',
        option3: 'liver',
        option4: 'Heart',
        answer: 1
    },
    {
        question: 'In what year did the Titanic sink?',
        option1: '1912',
        option2: '1913',
        option3: '1914',
        option4: '1915',
        answer: 1
    }
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 20;

// Funcion to start game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    displayQuestion();
};
// Function to display questions and answers
displayQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      //go to the end page
      return window.location.assign("/end.html");
    }
    // Question counter
    questionCounter++;
    progress.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
  
    // Display question
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
  
    // Display choices
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
  
    // Remove question from all questons array
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
  };

choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
  
      // Applay class to answer to style it
      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  
      // Add 10 points to correct answer
      if (classToApply === "correct") {
        incrementScore(SCORE_POINTS);
     }
  
    selectedChoice.parentElement.classList.add(classToApply);

    // Postpone answer to display color
    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        displayQuestion();
    }, 1000);
    });
});

  // Function to display points
  incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };
  
  startGame();
