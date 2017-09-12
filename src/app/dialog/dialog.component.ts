import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  @Input('show') showFlag: boolean;
  //@Output() valueEmitted = new EventEmitter<string>();
  constructor() { }

}
