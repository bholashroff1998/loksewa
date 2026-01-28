// Quiz Application Logic
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Load and display current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    
    // Update question number
    const questionNum = String(currentQuestion + 1).padStart(2, '0');
    document.getElementById('questionNumber').textContent = questionNum;
    
    // Update progress text
    document.getElementById('progressText').textContent = 
        `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Update score
    document.getElementById('currentScore').textContent = score;
    
    // Update progress bar
    const progress = (currentQuestion / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Render options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = shuffleArray(question.options);

    shuffledOptions.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(option, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    // Reset button state
    document.getElementById('nextBtn').disabled = true;
    selectedAnswer = null;
}

// Handle option selection
function selectOption(answer, element) {
    // Prevent multiple selections
    if (selectedAnswer !== null) return;

    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.add('disabled'));

    selectedAnswer = answer;
    const question = quizData[currentQuestion];

    if (answer === question.correct) {
        element.classList.add('correct');
        score++;
        document.getElementById('currentScore').textContent = score;
    } else {
        element.classList.add('incorrect');
        // Highlight the correct answer
        options.forEach(opt => {
            if (opt.textContent === question.correct) {
                opt.classList.add('correct');
            }
        });
    }

    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Next button click handler
document.getElementById('nextBtn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show results screen
function showResults() {
    document.getElementById('quizCard').classList.add('hidden');
    document.getElementById('resultsCard').classList.remove('hidden');

    const totalQuestions = quizData.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const incorrect = totalQuestions - score;

    // Update final score
    document.getElementById('finalScore').textContent = `${score}/${totalQuestions}`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    // Update stats
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('incorrectAnswers').textContent = incorrect;
    document.getElementById('accuracy').textContent = `${percentage}%`;
    
    // Determine performance message and emoji
    let emoji = '🎉';
    let performance = '';

    if (percentage === 100) {
        emoji = '🏆';
        performance = 'Perfect Score! You\'re a Science Master!';
    } else if (percentage >= 90) {
        emoji = '🌟';
        performance = 'Outstanding! Exceptional knowledge!';
    } else if (percentage >= 80) {
        emoji = '💫';
        performance = 'Excellent! Great understanding!';
    } else if (percentage >= 70) {
        emoji = '👏';
        performance = 'Well Done! Good job!';
    } else if (percentage >= 60) {
        emoji = '👍';
        performance = 'Nice Work! Keep it up!';
    } else if (percentage >= 50) {
        emoji = '📚';
        performance = 'Not bad! Room for improvement!';
    } else {
        emoji = '💪';
        performance = 'Keep Learning! Practice makes perfect!';
    }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('performance').textContent = performance;
    
    // Set progress bar to 100%
    document.getElementById('progressFill').style.width = '100%';
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    document.getElementById('quizCard').classList.remove('hidden');
    document.getElementById('resultsCard').classList.add('hidden');
    
    loadQuestion();
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});