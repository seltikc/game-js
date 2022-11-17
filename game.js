'use strict';

(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const computer = FIGURES[getRandomIntInclusive(0, 2)];
      let humanUser = ' ';
      humanUser = prompt('Напишите Ваш ответ: камень, ножницы, бумага');

      const figure = ['камень', 'ножницы', 'бумага'];

      const incorrect = FIGURES.some(item => (
        item.includes(humanUser.toLowerCase())));
      if (!incorrect) {
        alert('Вводи правельно слово!');
        return start();
      }

      if (humanUser === figure[0] && computer === figure[1] ||
      humanUser === figure[1] && computer === figure[2] ||
      humanUser === figure[2] && computer === figure[0]) {
        result.player += 1;
        alert(`Вы выиграли! Computer: ${result.computer}.Вы: ${result.player}`);
      }

      if (humanUser === computer) {
        result.player += 1;
        result.computer += 1;
        alert(`Ничья! Computer: ${result.computer}.Вы: ${result.player}`);
      } else {
        result.computer += 1;
        alert(`Вы проиграли! Computer:
        ${result.computer}.Вы: ${result.player}`);
      }

      const newGame = confirm('Играем еще?');
      if (newGame) {
        start();
      } else {
        alert(`Игра окончена! Результат: Computer:
        ${result.computer}. Вы: ${result.player}`);
        return;
      }
    };
  };
  window.rps = game;
})();
