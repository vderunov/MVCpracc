import { ModelGame } from '../models/ModelGame.js';
import { ViewGame } from '../views/ViewGame.js';

export class ControllerGame {
  constructor() {
    this.model = new ModelGame(this);
    this.view = new ViewGame(this);
    this.actionGetUser();
  }

  actionGetUser() {
    this.model.getUser();
  }

  getUser(user) {
    this.view.render(user);
  }

  getGuessPic(pic) {
    this.view.renderGuessPic(pic);
  }

  getWrongPic(pic) {
    this.view.renderWrongPic(pic);
  }

  chooseGender(event) {
    if (event.target.classList.contains('btns')) {
      this.model.isRightGender(
        event.target.classList.contains('btnM') ? 'male' : 'female'
      );
    }
    this.actionGetUser();
  }
}
