// Localbase database library 
// https://github.com/dannyconnell/localbase#getting-started

function populateDatabase(gameScore) {
    db.collection('scores').add({
        score: gameScore
    })
}

function getHighScore() {
    db.collection('scores').get().then(score => {
       
        let highScore = 0;

        for (let i = 0; i < score.length; i++) {
            if (score[i].score > highScore) {
                highScore = score[i].score;
            }
        }

        setHighScore(highScore);
    })
}

function setHighScore(highScore) {
    characterHighScore.append(highScore);
}