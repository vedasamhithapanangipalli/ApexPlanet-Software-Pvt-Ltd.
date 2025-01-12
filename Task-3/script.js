class QuizApp {
    constructor() {
        // DOM Elements
        this.quizElement = document.getElementById('quiz');
        this.loadingElement = document.getElementById('loading');
        this.scoreContainer = document.getElementById('score-container');
        this.questionTitle = document.getElementById('question-title');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.querySelector('.options-container');
        this.progressBar = document.getElementById('progress');
        this.scoreElement = document.getElementById('score');
        
        // Quiz state
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        
        // Bind methods
        this.init = this.init.bind(this);
        this.loadQuestions = this.loadQuestions.bind(this);
        this.displayQuestion = this.displayQuestion.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.showScore = this.showScore.bind(this);
        
        // Initialize quiz
        this.init();
    }
    
    async init() {
        // Add event listener for restart button
        document.getElementById('restart-button').addEventListener('click', () => {
            this.currentQuestion = 0;
            this.score = 0;
            this.init();
        });
        
        try {
            await this.loadQuestions();
            this.displayQuestion();
            this.loadingElement.classList.add('hide');
            this.quizElement.classList.remove('hide');
        } catch (error) {
            console.error('Error initializing quiz:', error);
        }
    }
    async loadQuestions() {
        // Simulated API call - replace with actual API endpoint
        const sampleQuestions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest mammal?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "White Rhino"],
                correct: 1
            },
            {
                question: "Which language runs in a web browser?",
                options: ["Java", "C", "Python", "JavaScript"],
                correct: 3
            },
            {
                question: "What does CSS stand for?",
                options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Central Simple Style"],
                correct: 1
            }
        ];
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.questions = sampleQuestions;
    }
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        const totalQuestions = this.questions.length;
        
        // Update progress bar
        this.progressBar.style.setProperty('--progress', `${(this.currentQuestion / totalQuestions) * 100}%`);
        
        // Update question title and text
        this.questionTitle.textContent = `Question ${this.currentQuestion + 1}/${totalQuestions}`;
        this.questionText.textContent = question.question;
        
        // Clear previous options
        this.optionsContainer.innerHTML = '';
        
        // Create new option buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.addEventListener('click', () => this.handleAnswer(index));
            this.optionsContainer.appendChild(button);
        });
    }
    
    async handleAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(option => option.style.pointerEvents = 'none');
        
        // Show correct/wrong answers
        options[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'wrong');
        options[question.correct].classList.add('correct');
        
        // Update score
        if (selectedIndex === question.correct) {
            this.score++;
        }
        
        // Wait before moving to next question
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Move to next question or show score
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.showScore();
        }
    }
    showScore() {
        this.quizElement.classList.add('hide');
        this.scoreContainer.classList.remove('hide');
        this.scoreElement.textContent = this.score;
    }
}
// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});