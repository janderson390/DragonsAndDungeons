// TESTING - Localbase database library 
// https://github.com/dannyconnell/localbase#getting-started
let db = new Localbase('db');

function populateDatabase(gameScore) {
    db.collection('scores').add({
        score: gameScore
    })
}   

function getScores() {
    db.collection('scores').get().then(score => {
        console.log(score);
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

        console.log(highScore);
    })
}

populateDatabase(4000);

getScores();

getHighScore();
