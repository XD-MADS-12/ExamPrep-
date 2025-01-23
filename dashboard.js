// Function to display chapters based on selected subject
function showChapters(subject) {
    const chapterList = document.getElementById('chapter-list');
    let chapters = [];
    let questions = [];
    let timeLimit = 0;

    switch (subject) {
        case 'Physics':
            chapters = [
                "প্রথম অধ্যায় (ভৌত জগত ও পরিমাপ)",
                "দ্বিতীয় অধ্যায় (গতি)"
            ];
            questions = [
                "What is the formula for velocity?",
                "Define acceleration."
            ];
            timeLimit = 30;  // Time limit in minutes
            break;
        case 'Chemistry':
            chapters = [
                "প্রথম অধ্যায় (রসায়নের ধারণা)"
            ];
            questions = [
                "What is the atomic number of Carbon?"
            ];
            timeLimit = 25;
            break;
        default:
            chapters = [];
            questions = [];
            timeLimit = 0;
    }

    // Display chapters for the selected subject
    chapterList.innerHTML = `<h3>${subject} - অধ্যায়সমূহ</h3>`;
    const ul = document.createElement('ul');
    chapters.forEach(chapter => {
        const li = document.createElement('li');
        li.textContent = chapter;
        li.onclick = () => startTest(questions, timeLimit);
        ul.appendChild(li);
    });
    chapterList.appendChild(ul);
}

// Function to start the test for the selected chapter
function startTest(questions, timeLimit) {
    const questionnaire = document.getElementById('questionnaire');
    const timer = document.getElementById('timer');

    questionnaire.innerHTML = '<h3>Test Started</h3>';
    let questionHTML = '<ul>';
    questions.forEach((q, index) => {
        questionHTML += `<li>${index + 1}. ${q}</li>`;
    });
    questionHTML += '</ul>';
    questionnaire.innerHTML += questionHTML;

    let minutes = timeLimit;
    let seconds = 0;

    const timerInterval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            timer.innerHTML = "Time's up!";
            alert("Test Over");
        } else {
            if (seconds === 0) {
                seconds = 59;
                minutes--;
            } else {
                seconds--;
            }
            timer.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}