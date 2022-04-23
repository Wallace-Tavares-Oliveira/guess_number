//     const form = document.querySelector('#form');
    
// let status = document.querySelector('#status');
// let attempt = document.querySelector('#attempt');
// let result = document.querySelector('#result-box');

// const Guess = {
//     max: 10,
//     attemptsNumber: 0,
//     numberDrawn: function randomValue() {
//         return Math.round(Math.random() * this.max);
//     }
// };

// let numberDrawn = Guess.numberDrawn();

// function updateAttempt(attempt, value) {
//     attempt.innerHTML = 'Attempt: ${value} !!';
// };

//     function handleSubmit(e) {
//         e.preventDefault();

//         let kick = document.querySelector('#kick').value;

//         if(!kick) {
//             alert('Put a number bettween (0 - 10)!!!')
//             return;
//         }

//         updateAttempt(attempt, ++Guess.attemptsNumber);

//         if(numberDrawn == kick){
//             playAgain();
//             statusGame.innerHTML = "Congratulations, you won!!!";
//             result.style.transition = '.4s';
//             result.style.backgroundColor = '#37c978';
//             result.style.color = '#fff';
//             statusGame.style.color = '#fff';
//             clear();
//         } else if (numberDrawn > kick){
//             statusGame.innerHTML = 'The number is bigger!';
//             statusGame.style.color = '#de4251';
//             clear();
//         } else if(numberDrawn < kick) {
//             status.innerHTML = 'The number is smaller!';
//             status.style.color = '#de4251';
//             clear();
//         }

//     };

//     function playAgain() {
//         document.querySelector('#btn-restart').style.display = 'flex';
//     };

//     function restart() {
//         document.location.reload(true);
//     };

//     function clear() {
//         document.querySelector('#kick').value = '';
//     };
    
//     form.addEventListener('submit', handleSubmit);
