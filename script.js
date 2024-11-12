'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 33;

// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

/////////////////////////////////////////////////
// გავხადოთ ინფუთი ჩექზე დაჭერისას ფუნქციონირებადი
//EVENT LISTENER - ით
//eventlistenerShi (პირველი არის ტაიფი ანუ რისი დამატება გვინდა როგორი ტაიფის) (მეორე არი რისი გაკეთება უნდა დავავალოთ მას,ფუნქციით რათქმაუნდა, ამ ფუნქციას ქვია event handler ი)
// inputidan რომ ამოვიღოთ კონტენტი გამოიყენება value property

// შევადაროთ სწორიაა თუ არა შეყვანილი ციფრი, secret number-s, რომელსაც რენდომად დავაგენერირებთ.
//math trunc ამგვალებს რიცხვს და პლიუს ერთი იმიტომ რო მივიღოთ ოციც რენდომად.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// მესიჯის ფუნქცია
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //    console.log(guess,typeof guess);

  //    როცა არაა ინფუთი
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No number!'
    displayMessage('❌ No number!');
  }
  //    როცა მოთამაშე იგებს
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    // გამწვანდეს მთლიანი პეეიჯი მოგებისას
    document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';

    document.querySelector('.number').style.width = '30rem';

    // HIGHSCORE
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //    როცა guess არის არასწორი ანუ გავაერთიანოთ, როცა მეტია და როცა ნაკლებია -- ერთ ბლოკში
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!' ;

      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😵‍💫 You lost the game!';
      displayMessage('😵‍💫 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// // მთლიანი პეიჯის Reload
// document.querySelector('.again').addEventListener('click', function () {
//     location.reload(); // Reload the current page
// });

// ////////////// მარა დავაყენოთ ყველაფერი mannually  ////////////////

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //შეცვალოს secretNumber

  // document.querySelector('.message').textContent = 'Start guessing..';.
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
