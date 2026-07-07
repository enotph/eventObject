class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
    document.addEventListener('keyup', (event) => {
      const enteredChar = event.key;

      if (!this.currentSymbol) {

        console.warn("currentSymbol не определен.");
        return;
      }
        const expectedChar = this.currentSymbol.textContent;

        if (enteredChar.toLowerCase() === expectedChar.toLowerCase()) {

          this.success();
        } else {
          this.fail();
        }
      });
  }

  success() {
    if (this.currentSymbol && this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
      }

    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    const wins = parseInt(this.winsElement.textContent) + 1;
    this.winsElement.textContent = wins;


    if (wins === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }


  fail() {

    const losses = parseInt(this.lossElement.textContent) + 1;
    this.lossElement.textContent = losses;

    if (losses === 3) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'я',
        'люблю',
        'kitkat'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

