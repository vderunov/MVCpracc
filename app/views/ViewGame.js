export class ViewGame {
  constructor(contr) {
    this.controller = contr;
    this.dom = document.querySelector('.game');
    this.guessed = document.querySelector('.guessed');
    this.wrong = document.querySelector('.wrong');
    this.dom.addEventListener(
      'click',
      this.controller.chooseGender.bind(this.controller)
    );
  }

  renderGuessPic(pic) {
    this.guessed.appendChild(pic);
  }

  renderWrongPic(pic) {
    this.wrong.appendChild(pic);
  }

  render(info) {
    this.dom.innerHTML = `
    <div class="counters">
        <h2>M:</h2>
        <h2 class="counterM">${info.info.male}</h2>
    </div>
    <div class="userinfo">
        <h3>Errors: <span class="err_info">${info.info.errors}</span></h3>
        <div class="userpic"><img src="${info.picture}" alt="userpic"></div>
        <div class="buttons">
            <button class="btns btnM">M</button>
            <button class="btns btnF">F</button>
        </div>
    </div>
    <div class="counters">
        <h2>F:</h2>
        <h2 class="counterF">${info.info.female}</h2>
    </div>`;
  }
}
