import { Component, OnInit, Input } from '@angular/core';
export type SecretSantaItemObj = {
  name_displayed: string;
  name_hidden: String;
};
@Component({
  selector: 'app-secret-santa-card',
  templateUrl: './secret-santa-card.component.html',
  styleUrls: ['./secret-santa-card.component.scss'],
})
export class SecretSantaCardComponent implements OnInit {
  @Input() card: SecretSantaItemObj = { name_displayed: '', name_hidden: '' };
  visible: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
