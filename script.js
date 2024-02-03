const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let currentQuestion = 0;
const questions = [
    {
        text: "Is that tue?",
        gifUrl: "https://media.tenor.com/FE_0-fMhLuUAAAAi/tontonfriends-chubby.gif",
        nextQuestion: 1
    },
    {
        text: "Wait are you sure?",
        gifUrl: "https://media.tenor.com/wRRxJ1Du3QgAAAAi/tontonfriends-chubby.gif",
        nextQuestion: 2
    },
    {
        text: "suuuureeeeee??",
        gifUrl: "https://media.tenor.com/B-72EZNL2vgAAAAi/tontonfriends-chubby.gif",
        nextQuestion: 3
    },
    {
        text: "date usssssssssssssss?",
        gifUrl: "https://media.tenor.com/kpNv8nmAmWsAAAAi/tontonfriends-chubby.gif",
        nextQuestion: 4
    },
    {
        text: "again! will you be my valentine??",
        gifUrl: "https://media.tenor.com/GEP8rRpIJSMAAAAi/tontonfriends-chubby.gif",
        nextQuestion: 5
    },
    {
        text: "YAAAYYY! Iloveyou baby",
        gifUrl: "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
        nextQuestion: null
    }
    
];

function handleYesClick() {
    const currentQuestionData = questions[currentQuestion];
    question.innerHTML = currentQuestionData.text;
    gif.src = currentQuestionData.gifUrl;

    if (currentQuestionData.nextQuestion === null) {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    } else {
        currentQuestion = currentQuestionData.nextQuestion;
    }
}

function handleNoMouseOver() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener('mouseover', handleNoMouseOver);