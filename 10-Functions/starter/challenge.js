'use strict';

// Challenge 1
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     // console.log(answer);

//     // update answers array
//     typeof answer === 'number' &&
//       answer < this.options.length &&
//       this.answers[answer]++;
//     // console.log(this.answers);
//     this.displayResults('string');
//   },
//   displayResults(type = 'string') {
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     } else if (type === 'array') {
//       console.log(this.answers);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // poll.registerNewAnswer();
// // console.log(poll.answers);

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// console.log(poll.displayResults.call({ answers: data2 }));

// Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
