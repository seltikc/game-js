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
      console.log(computer);
      let humanUser = ' ';
      humanUser = prompt('Напишите Ваш ответ: камень, ножницы, бумага');

      if (computer === 'камень' && humanUser === 'бумага') {
        result.player++;
        alert(`Вы выиграли! Computer: ${result.computer}.Вы: ${result.player}`);
      }
      if (computer === 'камень' && humanUser === 'ножницы') {
        result.computer++;
        alert(`Вы проиграли! Computer:
        ${result.computer}.Вы: ${result.player}`);
      }
      if (computer === 'бумага' && humanUser === 'ножницы') {
        result.player++;
        alert(`Вы выиграли! Computer: ${result.computer}.Вы: ${result.player}`);
      }
      if (computer === 'бумага' && humanUser === 'камень') {
        result.computer++;
        alert(`Вы проиграли!Computer: ${result.computer}.Вы: ${result.player}`);
      }
      if (computer === 'ножницы' && humanUser === 'камень') {
        result.player++;
        alert(`Вы выиграли!Computer: ${result.computer}.Вы: ${result.player}`);
      }
      if (computer === 'ножницы' && humanUser === 'бумага') {
        result.computer++;
        alert(`Вы проиграли!Computer: ${result.computer}.Вы: ${result.player}`);
      }
      if (humanUser === computer) {
        result.player++;
        result.computer++;
        alert(`Ничья! Computer: ${result.computer}.Вы: ${result.player}`);
      }

      const newGame = confirm('Еще?');
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
