export class ModelGame {
  constructor(contr) {
    this.controller = contr;
    this.api = 'https://randomuser.me/api/';
    this.user = {
      info: {
        errors: 0,
        male: 0,
        female: 0
      },
      pictures: {
        setPicGuessed: new Set([]),
        setPicWrong: new Set([])
      }
    };
  }

  getUser() {
    fetch(this.api)
      .then(response => response.json())
      .then(response => {
        this.user.gender = response.results[0].gender;
        this.user.picture = response.results[0].picture.large;

        this.controller.getUser(this.user);
      });
  }

  isRightGender(gender) {
    if (gender === this.user.gender) {
      this.user.info[gender]++;
      this.createGuessedPic(this.user.picture);
    } else {
      this.user.info.errors++;
      this.createWrongPic(this.user.picture);
    }
  }

  createGuessedPic(url) {
    this.user.pictures.setPicGuessed.add(url);
    const img = document.createElement('img');
    for (this.value of this.user.pictures.setPicGuessed) {
      img.setAttribute('src', url);
      this.controller.getGuessPic(img);
    }
  }

  createWrongPic(url) {
    this.user.pictures.setPicWrong.add(url);
    const img = document.createElement('img');
    for (this.value of this.user.pictures.setPicWrong) {
      img.setAttribute('src', url);
      this.controller.getWrongPic(img);
    }
  }
}
