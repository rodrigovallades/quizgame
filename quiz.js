(function() {

    var points, questions, randomQuestion;
    
    points = 0;
    questions = [];    
    
    function Question(question, answers, correctAnswer) {
        this.question = question || '',
        this.answers = answers || [],
        this.correctAnswer = correctAnswer || 0;
    }

    function randomQuestion() {
        var random = Math.floor(Math.random() * questions.length);
        return questions[random];
    }

    Question.prototype = {
        checkAnswer: function(input) {
            // checking if prompt was cancelled. If so, abort.          
            if (input === null) {       
                console.log('\n--------');         
                console.log('\nYou achieved a total of ' + points + ' points.')
                console.log('\nAborting...')
                return;
            }                        
            if (input === this.correctAnswer) {
                points += 1;
                console.log('\nRIGHT ANSWER!');
                console.log('\nPoints: ' + points);
            } else {
                console.log('\nWrong answer.')
            }
            this.nextQuestion();
        },        
        ask: function() {
            this.logToConsole();
            var answer = prompt(this.question);
            if (answer !== null) {
                answer = parseInt(answer);
            }            
            this.checkAnswer(answer);
        },
        nextQuestion: function() {            
            randomQuestion().ask();
        },
        logToConsole: function() {
            console.log('--------');
            console.log(this.question)
            for (i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]);
            }            
        }
    };

    questions.push(new Question('What is my name?', ['Fabiano', 'Rodrigo', 'Alan'], 1));
    questions.push(new Question('Where do I live?', ['São Paulo', 'Milano', 'Amsterdan'], 2));
    questions.push(new Question('Are you studying JavaScript?', ['Yes', 'No'], 0));

    // start
    setTimeout(function(){
        randomQuestion().ask();
    }, 500);
    

}());