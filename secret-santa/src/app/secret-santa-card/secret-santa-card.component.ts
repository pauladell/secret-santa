import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secret-santa-card',
  templateUrl: './secret-santa-card.component.html',
  styleUrls: ['./secret-santa-card.component.scss'],
})
export class SecretSantaCardComponent implements OnInit {
  @Input() name_displayed: string;
  @Input() name_hidden: string;

  constructor() {}

  ngOnInit(): void {}
}
