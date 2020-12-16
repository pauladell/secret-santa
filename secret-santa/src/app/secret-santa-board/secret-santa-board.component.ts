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
  @Input() friendsList: string[] = ['luis', 'paloma'];
  secretSantaList: SecretSantaItemObj[];

  constructor() {
    this.buildSecretSanta();
  }
  buildSecretSanta() {
    console.log('entra en builsecretsanta');
    this.secretSantaList = this.friendsList.map((item) => {
      let tupla: SecretSantaItemObj = {
        name_displayed: item,
        name_hidden: item,
      };
      console.log(tupla);
      return tupla;
    });
  }
  ngOnInit(): //objeto.buildSecretSanta();
  void {}
}
