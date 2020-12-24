import { Component, OnInit, Input } from '@angular/core';
type SecretSantaItemObj = {
  name_displayed: string;
  name_hidden: String;
};
@Component({
  selector: 'app-secret-santa-board',
  templateUrl: './secret-santa-board.component.html',
  styleUrls: ['./secret-santa-board.component.scss'],
})
export class SecretSantaBoardComponent implements OnInit {
  @Input() friendsList: string[] = [
    'luis',
    'paloma',
    'adonay',
    'angelines',
    'monica',
    'luis-clar',
    'elisa',
    'elisabet',
    'jacobo',
  ];
  secretSantaList: SecretSantaItemObj[];
  shuffled_list: string[];
  constructor() {
    this.buildSecretSanta();
  }
  buildSecretSanta() {
    this.shuffled_list = this.shuffle(this.friendsList);
    this.secretSantaList = [];
    for (let i = 0; i < this.shuffled_list.length; i++) {
      if (i < this.shuffled_list.length - 1) {
        var tupla: SecretSantaItemObj = {
          name_displayed: this.shuffled_list[i],
          name_hidden: this.shuffled_list[i + 1],
        };
      } else {
        var tupla: SecretSantaItemObj = {
          name_displayed: this.shuffled_list[i],
          name_hidden: this.shuffled_list[0],
        };
      }

      this.secretSantaList.push(tupla);
    }
    this.secretSantaList = this.shuffle(this.secretSantaList);
    /* this.secretSantaList = this.friendsList.map((item) => {
      let tupla: SecretSantaItemObj = {
        name_displayed: item,
        name_hidden: '',
      };

      console.log(tupla);
      return tupla;
    });*/
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  ngOnInit(): //objeto.buildSecretSanta();
  void {}
}
